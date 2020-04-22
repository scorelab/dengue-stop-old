const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const key = require("../config/DBSetup").secret;
const isValidId=require('../helpers/Routine').isValidId;

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

const Report = require("../models/DengueReport");
const FlowQuestion = require("../models/FlowQuestion");
const FlowAnswer = require("../models/FlowAnswer");

exports.Landing=(req,res)=>{
  res.send("<p>Report Page - Dengue Stop");
}


exports.addReport=(req,res)=>{

    if (isValidId(req.body.ReporterId)) {

        let reportPara={}
        let newAdd={}
        newAdd.FlatNo=req.body.FlatNo;
        newAdd.Locality=req.body.Locality;
        newAdd.City=req.body.City;
        newAdd.Pincode=req.body.Pincode;
        newAdd.State=req.body.State;
        newAdd.Country=req.body.Country;

        //Report Model Paramters
        reportPara.Address=newAdd;
        reportPara.UIDNo=req.body.UIDNo;
        reportPara.PatientFirstName=req.body.PatientFirstName;
        reportPara.PatientSecondName=req.body.PatientSecondName;
        reportPara.Symptoms=JSON.parse(req.body.Symptoms);
        reportPara.Lat=req.body.Lat;
        reportPara.Log=req.body.Log;
        reportPara.ReportedBy=req.body.ReportedBy;
        reportPara.ReporterId=req.body.ReporterId;
        reportPara.NearestFC=req.body.NearestFC;

        let newReport=new Report(reportPara);
        newReport.save()
        .then(
            r=>{
                if(r)
                {

                    res.json({status:"SUCCESS",message:"Successfully uploaded report",Payload:r});

                }
                else{
                    res.json({status:"ERROR",message:"Error uploading report"});

                }
            }


        )
        .catch(err=>{
            res.json(err);

        })

    }else{

        res.json({status:"ERROR",message:"Not a valid reporter ID"});
    }

}


exports.getParticularReport=(req,res)=>{

    if(isValidId(req.params.rid))
    {
        Report.find({_id:req.params.rid})
    .then(
        r=>{
                if(r)
                {
                    res.json({status:"SUCCESS",Payload:r});
                }
                else{
                    res.json({status:"ERROR",message:"Error Fetching Report"});
                }
        }
    )
    .catch(err=>{
        res.json(err);
    })

    }else{

        res.json({status:"ERROR",message:"Not a valid report ID"});

    }

}

exports.editReport=(req,res)=>{

    if (isValidId(req.body.ReportID)) {

        let updateParamters={}
        let newAdd={}
        newAdd.FlatNo=req.body.FlatNo;
        newAdd.Locality=req.body.Locality;
        newAdd.City=req.body.City;
        newAdd.Pincode=req.body.Pincode;
        newAdd.State=req.body.State;
        newAdd.Country=req.body.Country;

        //Report Model Paramters
        updateParamters.Address=newAdd;
        updateParamters.UIDNo=req.body.UIDNo;
        updateParamters.PatientFirstName=req.body.PatientFirstName;
        updateParamters.PatientSecondName=req.body.PatientSecondName;
        updateParamters.Symptoms=JSON.parse(req.body.Symptoms);
        updateParamters.Lat=req.body.Lat;
        updateParamters.Log=req.body.Log;
        updateParamters.ReportedBy=req.body.ReportedBy;
        updateParamters.ReporterId=req.body.ReporterId;
        updateParamters.NearestFC=req.body.NearestFC;

        Report.findByIdAndUpdate({_id:req.body.ReportID},{$set:updateParamters})
        .then(
            r=>{
                if(r)
                res.json({status:"SUCCESS",message:"Successfully updated details"});
                else
                res.json({status:"ERROR",message:"Error updating report"});
            }   
        )
        .catch(err=>{res.json(err)})

    }
    else{
        res.json({status:"ERROR",message:"Not a valid report ID"});
    }

}


exports.updateReportStatus=(req,res)=>{

    if (isValidId(req.body.ReportID)) {

        Report.findByIdAndUpdate({_id:req.body.ReportID},{Status:req.body.Status})
        .then(
            r=>{
                if(r)
                res.json({status:"SUCCESS",message:"Successfully updated status"});
                else
                res.json({status:"ERROR",message:"Error updating report status"});
            }   
        )
        .catch(err=>{res.json(err)})



    }
    else{
        res.json({status:"ERROR",message:"Not a valid report ID"});
    }


}

exports.deleteReport=(req,res)=>{


    if (isValidId(req.body.ReportID)) {

        Report.findByIdAndDelete({_id:req.body.ReportID})
        .then(
            r=>{
                if(r)
                res.json({status:"SUCCESS",message:"Successfully deleted report"});
                else
                res.json({status:"ERROR",message:"Error deleting report"});
            }   
        )
        .catch(err=>{res.json(err)})
    }
    else{
        res.json({status:"ERROR",message:"Not a valid report ID"});
    }

}


exports.addFlowQuestion=(req,res)=>{

    let r={};
    r.questions=JSON.parse(req.body.questions);
    let newr=new FlowQuestion(r);
    newr.save()
    .then(
        q=>{
            if(q)
            res.json({status:"SUCCESS",message:"Successfully added flow question"});
            else
            res.json({status:"SUCCESS",message:"Error adding flow question"});
        }

        
    )
    .catch(err=>res.json(err));
}

exports.getFlowQuestion=(req,res)=>{

    FlowQuestion.find({})
    .then(
        q=>{
            if(q)
            res.json({status:"SUCCESS",Payload:q});
            else
            res.json({status:"SUCCESS",message:"Error getting flow question"});
        }
    )
    .catch(err=>res.json(err));
}
exports.answerFlowQuestion=(req,res)=>{

    let r={};
    r.answer=JSON.parse(req.body.answer);
    r.reportId=req.body.answer;
    let newr=new FlowAnswer(r);
    newr.save()
    .then(
        q=>{
            if(q)
            res.json({status:"SUCCESS",message:"Successfully added ans to flow question"});
            else
            res.json({status:"SUCCESS",message:"Error adding flow answer"});
        }
    )
    .catch(err=>res.json(err));
}