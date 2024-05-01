const express = require('express');
const app = express();


//method overide for patch and put into post
const methodOveride = require('method-override');

const cors=require('cors');

app.use(cors({ origin: true, credentials: true }));
//env
const {config}=require('dotenv');
config();

app.use(express.urlencoded({ extended: true }))  //to parse the post request of the urlencoded type
app.use(express.json())  //to parse the info in json type...both are the middlewares

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology: true// to use new connnection manager of mongoose
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Backend connected");
});

const Adminroutes=require("./routes/Adminroute.js");
const Doctorroutes=require("./routes/Doctorroute.js");
const Patientroutes=require("./routes/Patientrout.js");
const Nurseroutes=require("./routes/Nurseroute.js");



app.use('/admin',Adminroutes);
app.use('/doctor',Doctorroutes);
app.use("/patient",Patientroutes);
app.use("/nurse",Nurseroutes);





const PORT=5501;
app.listen(PORT,()=>{ 
    console.log(`server running in ${PORT}`)});