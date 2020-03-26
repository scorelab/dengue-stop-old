const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const key = require("../config/DBSetup").secret;

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

const Report = require("../models/DengueReport");

exports.Landing=(req,res)=>{
  res.send("<p>Report Page - Dengue Stop");
}


exports.addReport=(req,res)=>{

    if (req.body.ReporterId.match(/^[0-9a-fA-F]{24}$/)) {

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

                    res.json({status:"SUCCESS",message:"Successfully updated report",Payload:r});

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