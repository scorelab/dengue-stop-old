const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const passportjwt = require("passport-jwt");
const jwt = require("jsonwebtoken");
const key = require("../../config/DBSetup").secret;
const mime=require("mime");
const path = require('path');
var fs = require('fs');
const multer = require('multer');
const zip=require("express-zip");

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

const User = require("../../models/User");

router.get("/", (req, res) => {
  res.send("<p>Auth Page - Dengue Stop" );
});

const authController=require('../../controllers/Authorize');

//Landing test ROUTE
router.get("/landing", authController.Landing);


//Register ROUTE
router.post("/register", authController.register);

//Login ROUTE
router.post("/login", authController.login);


//Update Passeord ROUTE
router.post("/updatepassword", authController.updatePassword);





module.exports = router;