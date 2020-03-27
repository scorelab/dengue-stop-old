const express = require("express");
const router = express.Router();

const Report = require("../models/ReportSchema");

// Add a new report
router.post("/addNewReport", (req, res) => {
  var data = {
    userName: req.body.userName,
    locationName: req.body.locationName,
    country: req.body.country,
    message: req.body.message
  };
  var report = new Report(data);
  report
    .save()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});

// get all reports
router.get("/getAllReports", (req, res) => {
  Report.find({})
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
