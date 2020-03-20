const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const passportjwt = require("passport-jwt");
const jwt = require("jsonwebtoken");
const key = require("../config/DBSetup").secret;
const mime=require("mime");
const path = require('path');
var fs = require('fs');
const multer = require('multer');
const zip=require("express-zip");

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

const User = require("../models/User");

exports.Landing=(req,res)=>{
  res.send("<p>Landing Page - Dengue Stop");
}


exports.register = (req, res) => {
  User.findOne({
      $or: [
        { email : req.body.email },
        { phoneNumber: req.body.phoneNumber },  
        {username:req.body.username}
      ]
    })
      .then(user => {
        if (user) {
          res
            .status(200)
            .json({ status: "ERROR", message: "User already registered" });
        } else {
          const newPerson = new User({
            username:req.body.username,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password
          }); 
          bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(newPerson.password, salt, function(err, hash) {
              // Store hash in your password DB.
              newPerson.password = hash;

              newPerson
              .save()
              .then(person => {
                res.status(200).json({ status: "SUCCESS", message: "User successfully registered" });
              })
              .catch(err => {
                console.log(err);
                res.send(err)
              });

            });
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.send(err)
      });
};



exports.login=(req, res, next) => {
  User.findOne({
    $or: [
      { email : req.body.email },
      { phoneNumber: req.body.phoneNumber }
    ]
  })
    .then(user => {
      if (user) {
        if (user.email == req.body.email || user.phoneNumber==req.body.phoneNumber) {
          bcrypt
          .compare(req.body.password, user.password)
          .then(res1 => {
            console.log(user.password);
            console.log(res1);
              if(res1)
              {
                const payload = {
                  username: user.username,
                  phoneNumber: user.phoneNumber,
                  id: user.id,
                  email: user.email,
                  profilepic: user.profilepic
                };
                jwt.sign(payload, key, (err, token) => {
                  if (err) throw err;
                  res.json({ status: "SUCCESS", token: "Bearer " + token ,userId:payload.id});
                });
              }

              else {
                   res.json({ status: "ERROR", message: "Invalid Credentials"});
                 }

        }).catch(err=>{console.log(err);
          res.json({ status: "ERROR", message: "Password check failed - Server Error"});
        });
      }

      else{
        res.json({ status: "ERROR", message: "Invalid User"});
      }

     } else {
        res.json({ status: "ERROR", message: "User not found"});
      }


    })
    .catch(err => {
      res.json(err);
      console.log(err)});
}


exports.updatePassword=(req, res) => {
  const phoneNumber=req.body.phoneNumber;
  const email=req.body.email;
  const newPassword=req.body.newPassword;
  if(email==req.user.email || phoneNumber==req.user.phoneNumber )
  {

    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(newPassword, salt, function(err, hash) {

        User.findOneAndUpdate({$or:[{phoneNumber: phoneNumber},{email:email}]},{$set:{password:hash}})
        .then(
           user=>{
             if(user!=null)
             { 
             res.json({status: "SUCCESS", message:"Successfully updated the password"})
            }
         else{
           res.json({status: "ERROR" , message:"Phone No or Email Error"} );
         }
           }
        )
        .catch(err=>{
             res.json({status: "ERROR"} );
             console.log("Update Password Error" + err);
        })

      })});

  }
  else{
    res.json({status: "ERROR" , message:"Invalid user to update password"} );

  }
}
