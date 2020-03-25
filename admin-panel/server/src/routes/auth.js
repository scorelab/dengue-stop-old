const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { isAuthenticated } = require('../middlewares/');
require('dotenv').config();

const { Router } = express;
const router = Router();
const secret = process.env.JWT_SECRET || 'default value';

router.post('/register', (req, res) => {
  const { email, name, username, password } = req.body;
  User.findOne({ email })
    .then(user => {
      if (user) {
        const error = 'Email already registered!';
        return res.status(400).json({
          error,
        });
      } else {
        const newUser = new User({
          name,
          username,
          email,
          password,
        });
        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err;

          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => res.status(400).json(err));
          })
        });
      }
    })
    .catch(err => console.error(err));
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      if (!user) return res.status(404).json({ error: 'Account not registered', });

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              userId: user._id,
              username: user.username,
            };
            // Token expires in an hour
            jwt.sign(payload, secret, { expiresIn: 36000 }, (err, token) => {
              if (err) return res.status(500).json({
                error: 'Error signing token!',
                raw: err,
              });
              return res.status(200).json({
                success: true,
                token: `Bearer ${token}`,
                userId: user._id,
                isAdmin: user.admin,
              });
            });
          } else return res.status(400).json({ error: 'Incorrect password!', })
         })
        .catch(err => console.error(err));
    })  
    .catch(err => console.error(err));
});

router.get('/logout', isAuthenticated, (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logged out!' });
});

module.exports = router;
