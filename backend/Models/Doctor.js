const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const DoctorSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        sparse:true, /// Koi bhi errror aage aya to yahim se aayega to remove E110000
    },
    name:String,
    password:String,
    speciality:String,
    charge:Number,
    patients:[
        {
            type:Schema.Types.ObjectId,
            ref:'Patient'
        } 
        
    ],
    
});
module.exports=mongoose.model('Doctor',DoctorSchema);
