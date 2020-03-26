const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var ReportSchema = new Schema({
    UIDNo: {
    type: String,
    default: ""
  },
  PatientFirstName: {
    type: String,
    required:true,
    default: ""
  },
  PatientSecondName: {
    type: String,
    default: ""
  },
  Address: {
    FlatNo: {
        type: String,
        required:true,
        default: ""
      },
      Locality: {
        type: String,
        required:true,
        default: ""
      },
      City: {
        type: String,
        required:true,
        default: ""
      },
      Pincode: {
        type: Number,
        required:true,
        default: ""
      },
      State: {
        type: String,
        default: ""
      },
      Country: {
        type: String,
        default: ""
      },
  },
  
  Symptoms: {
    type: JSON,
    required:true,
    default: ""
  },
  Lat: {
    type: String,
    required:true,
    default: ""
  },
  Log: {
    type: String,
    required:true,
    default: ""
  },
  ReportedBy: {
    type: String,
    required:true,
    default: ""
  },
  ReporterId: {
    type: String,
    required:true,
    default: ""
  },
  NearestFC: {
    type: String,
    required:true,
    default: ""
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  lastUpdatedOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = Report = mongoose.model("ReportCollection", ReportSchema);
