const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("dotenv").config();

const config = require("./config/database");

// routes
const reportRotues = require("./routes/reportRoutes");

// Database connection
mongoose
  .connect(config.database)
  .then(function(response) {
    console.log("MongoConnected");
  })
  .catch(function(response) {
    console.log("MongoEror");
  });

// To avoid Cors error
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());

app.use("/api", reportRotues);

//  Running Port
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Port open at ${port}`);
});
