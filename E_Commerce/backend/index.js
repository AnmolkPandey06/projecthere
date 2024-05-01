const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");


//method overide for patch and put into post
const methodOveride = require('method-override');

const cors=require('cors');

app.use(cors({ origin: true, credentials: true }));
//env
const {config}=require('dotenv');
config();

app.use(express.urlencoded({ extended: true }))  //to parse the post request of the urlencoded type
app.use(express.json())  //to parse the info in json type...both are the middlewares








//database


const User=[
    {
        _id:1,
        Name:"Anmol",
        Password:"Anmol",
        Products:[

        ]

    }
]





const Admin=[
    {
        _id:1,
        Name:"Admin",
        Password:"Admin",
        Products:[
           {
            Name:"P1",
            Stock:5,
            Price:10
           }
           ,
           {
            Name:"P2",
            Stock:4,
            Price:15
           },
           {
            Name:"P3",
            Stock:6,
            Price:20
           }  
        ]
        
    }
]

//middleware


const generateToken = (id,res) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30days",

  });
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



const protectUser = async (req, res, next) => {
    let token;
     try {
     token = req.headers.authorization;
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //   req.user = await Patient.findById(decoded.id).select("-Password");
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

app.post('/adminlogin', async (req, res) => {
    try{
      const {name,password}=req.body;
      const user = Admin.find(user=>user.Name===name);
      if (user && (password==user.Password)) {
        res.json({
          _id: user._id,
          name: user.Name,
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



app.post('/userlogin', async (req, res) => {
    try{
      const {name,password}=req.body;
      const user = User.find(user=>user.Name===name);
      if (user && (password==user.Password)) {
        res.json({
          _id: user._id,
          name: user.Name,
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


const PORT=5501;
app.listen(PORT,()=>{ 
    console.log(`server running in ${PORT}`)});