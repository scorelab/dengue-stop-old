const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReportsSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  locationName: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

var report = mongoose.model("report", ReportsSchema);
module.exports = report;
