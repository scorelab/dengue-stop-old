const express = require("express");
const router = express.Router();

router.post("/addNewReporter", (req, res) => {
  var result = {};
  var data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    country: req.body.country,
    city: req.body.city,
    state: req.body.state
  };
  new user() = new User(data);
  user
    .save()
    .then(response => {
      result["status"] = "success";
      res.send(result);
    })
    .catch(err => {
      result["status"] = "failed";
      res.send(result);
    });
});

// get a specific reporter details
router.get("/getReporterDetails/:reporterID", (req, res) => {
  var result = {};
  User.findOne({ _id: req.params.reporterID })
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
