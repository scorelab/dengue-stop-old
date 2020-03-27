const express = require("express");
const router = express.Router();

const Report = require("../models/ReportSchema");
const User = require("../models/UserSchema");

// Add a new report
router.post("/addNewReport", (req, res) => {
  var data = {
    reportedBy: req.body.userName,
    reporterID: req.body.reporterID,
    locationName: req.body.locationName,
    country: req.body.country,
    message: req.body.message,
    coordinates: req.body.coordinates,
    symptoms: req.body.symptoms,
    patientName: req.body.patientName
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

// get a report by id
router.get("/getReport/:reportID", (req, res) => {
  var result = {};
  Report.findOne({ _id: req.params.reportID })
    .then(response => {
      result = response;
      result["status"] = "success";
      res.send(result);
    })
    .catch(err => {
      result = err;
      result["status"] = "failed";
      res.send(result);
    });
});

module.exports = router;
