const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const PatientSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        sparse:true, /// Koi bhi errror aage aya to yahim se aayega to remove E110000
    },
    name:String,
    password:String,
    symptoms:String,
    medicalHistory:String,
    doctor:{
        type:Schema.Types.ObjectId,
        ref:'Doctor'
    }, 
    nurse:{
        type:Schema.Types.ObjectId,
        ref:'Nurse'
    }, 
    
});
module.exports=mongoose.model('Patient',PatientSchema);
