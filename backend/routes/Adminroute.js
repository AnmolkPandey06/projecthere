const express = require('express');
const app = express();

const Doctor = require("../Models/Doctor.js");
const Admin=require('../Models/Admin.js')
const Nurse=require('../Models/Nurse.js')
const Patient=require('../Models/Patient.js');


router = express.Router();
const generateToken=require('../midddleware/generateToken.js');
const { protectPatient,protectNurse,protectAdmin,protectDoctor } = require("../midddleware/authmiddleware.js")

router.post('/register',async (req, res) => {
    try {
      const user = await Admin.findOne({email:req.body.email});
      if (user) {
        res.status(400).json({respnse:"Admin Exists"});
      }
      else{
        const user = await Admin.create({
            email:req.body.email,
            password:req.body.password,
            name:req.body.name
        });

 

        console.log(user);
        if (user) {
            //console.log(generateToken);;
            res.status(201).json({
              _id: user._id,
              name: user.name,
              email: user.email,
              admintoken: generateToken(user._id,res),
            });
          } else {
            res.status(400);
            // throw new Error("User not found");
        }
    
      
      }
    } catch (error) {
       console.log(error);
    }
    
});



router.post('/login', async (req, res) => {
      try{
        const {email,password}=req.body;
        const user = await Admin.findOne({ email:email });
        if (user && (password==user.password)) {
          res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id,res),
          }).status(201);
        } else {
          res.status(401);
          throw new Error("Invalid Email or Password");
        }
      }
      catch(error){
             console.log(error);
      }
      
  }
);



router.get('/getdetails', async (req, res) => {
  try{
    const Patients=await Patient.find({}).populate('doctor');
    const Doctors=await Doctor.find({}).populate('patients');
    const Nurses=await Nurses.find({}).populate('patients');
    console.log(Patients,Doctors,Nurses);
    res.status(200).json({Patients,Doctors,Nurses});
  }
  catch(error){
         console.log(error);
  }
  
}
);







module.exports = router;