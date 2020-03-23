const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    default: ""
  },
  email: {
    type: String,
    required:true,
    default: ""
  },
  phoneNumber: {
    type: String,
    required:true,
    default: ""
  },
  password: {
    type: String,
    required:true,
    default: ""
  },
  profilePic: {
    type: String,
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

module.exports = User = mongoose.model("UserCollection", UserSchema);
