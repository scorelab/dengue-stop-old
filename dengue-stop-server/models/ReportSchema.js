const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReportsSchema = new Schema({
  reportedBy: {
    type: String,
    required: true
  },
  reporterID: {
    type: String,
    required: true
  },
  locationName: {
    type: String,
    required: true
  },
  symptoms: {
    type: [String],
    required: true
  },
  coordinates: {
    type: [Number],
    index: "2dsphere",
    required: true
  },
  country: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  patientName: {
    type: String,
    required: true
  }
});

var report = mongoose.model("report", ReportsSchema);
module.exports = report;
