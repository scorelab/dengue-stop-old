const { Strategy, ExtractJwt } = require('passport-jwt');

const User = require('../models/User');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'default value';
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
};

module.exports = passport => {
  passport.use(
    new Strategy(options, (payload, done) => {
      User.findById(payload.id)
        .then(user => {
          if (user) {
            return done(null, {
              userId: user.id,
              username: user.username,
            });
          }
          return done(null, false);
        })
        .catch(err => console.error(err));
    })
  );
};