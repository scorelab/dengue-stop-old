const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  questions:{
    type:Array,
    required:true,
    default:[]
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

module.exports = Question = mongoose.model("QuestionCollection", QuestionSchema);
