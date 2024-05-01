const express = require('express');
const app = express();

const Doctor = require("../Models/Doctor.js");
const Admin=require('../Models/Admin.js')
const Nurse=require('../Models/Nurse.js')
const Patient=require('../Models/Patient.js');


router = express.Router();
const generateToken=require('../midddleware/generateToken.js');
const { protectPatient,protectNurse,protectAdmin,protectDoctor } = require("../midddleware/authmiddleware.js")



router.get('/register',async(req,res)=>{
  const doctors=await Doctor.find({})
  console.log(doctors);
  res.status(200).json({doctors});
});

router.post('/register',async (req, res) => {
    try {
      const user = await Patient.findOne({email:req.body.email});
      if (user) {
        res.status(400).json({respnse:"Patient Exists"});
      }
      else{
        const doctor=await Doctor.findById(req.body.doctorid);
        const user = await Patient.create({
            email:req.body.email,
            password:req.body.password,
            name:req.body.name,
            symptoms:req.body.symptoms,
            medicalHistory:req.body.medicalHistory,
            doctor:doctor,

        });


        await Doctor.findOneAndUpdate(
          { _id: req.body.doctorId },
          { $push: { patients: user._id } },
          { new: true }
      );

        



 

        console.log(user);
        if (user) {
            //console.log(generateToken);;
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                symptoms:user.symptoms,
                medicalHistory:user.medicalHistory, 
                token: generateToken(user._id,res),
              }).status(201);
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
        const user = await Patient.findOne({ email:email });
        if (user && (password==user.password)) {
          res.json({
            _id: user._id,
                name: user.name,
                email: user.email,
                symptoms:user.symptoms,
                medicalHistory:user.medicalHistory, 
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



router.get('/getinformation', async (req, res) => {
  try{
    const patient=await Patient.find(req.user._id).populate('doctor');
    res.status(200).json({patient});
  }
  catch(error){
         console.log(error);
  }
  
}
);





module.exports = router;