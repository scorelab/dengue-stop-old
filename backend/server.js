var express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const passport = require("passport");
const fs=require('fs');

//API ROUTES
const Auth=require('./routes/api/Auth');


const app = express();
const port = 4500 || process.env.PORT;

//Passport Middleware
app.use(passport.initialize());

require("./strategy/jsonwtStrategy")(passport);


// app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//MongoDB Init

var db = require("./config/DBSetup").DBURL;

console.log("Connecting to  : " + db);
const authData = {
  user: process.env.MONGO_USERNAME,
  pass: process.env.MONGO_PASSWORD,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};



//MongoDB Connect
mongoose
  .connect(db, authData)
  .then((
  ) => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Connection  Error " + err));






// Importing all the routes/api
app.use("/auth",Auth);

//Basic Checking of Server
app.get("/", (req, res) => {
  res.send("<p>Dengue Stop Server :) </p>");
});

app.get('*', function(req, res){
  res.status(404).json({status:"ERROR",message:"Not route found"});
});

module.exports = app;