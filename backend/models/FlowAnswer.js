const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var AnswerSchema = new Schema({
  questions:{
    type:Array,
    required:true,
    default:[]
  },  
  reportId:{
    type:String,
    default:""
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

module.exports = Answer = mongoose.model("AnswerCollection", AnswerSchema);
