const jwt = require("jsonwebtoken");
const Doctor = require("../Models/Doctor.js");
const Admin=require('../Models/Admin.js')
const Nurse=require('../Models/Nurse.js')
const Patient=require('../Models/Patient.js');

 const protectPatient = async (req, res, next) => {
  let token;
   try {
   
     
    token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await Patient.findById(decoded.id).select("-Password");
    console.log(req.user)
    next();
    } catch (error) {
      res.status(401);
      console.log(error);
      throw new Error("Not authorized, token failed");
    }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
};



 const protectDoctor = async (req, res, next) => {
    let token;
     try {
     
       
      token = req.headers.authorization;
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await Doctor.findById(decoded.id).select("-Password");
      console.log(req.user)
      next();
      } catch (error) {
        res.status(401);
        console.log(error);
        throw new Error("Not authorized, token failed");
      }
  
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  };


   const protectNurse = async (req, res, next) => {
    let token;
     try {
     
       
      token = req.headers.authorization;
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await Patient.findById(decoded.id).select("-Password");
      console.log(req.user)
      next();
      } catch (error) {
        res.status(401);
        console.log(error);
        throw new Error("Not authorized, token failed");
      }
  
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  };



 const protectAdmin = async (req, res, next) => {
    let token;
     try {
      token = req.headers.authorization;
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await Patient.findById(decoded.id).select("-Password");
      console.log(req.user)
      next();
      } catch (error) {
        res.status(401);
        console.log(error);
        throw new Error("Not authorized, token failed");
      }
  
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
};




module.exports={protectAdmin,protectDoctor,protectNurse,protectPatient};