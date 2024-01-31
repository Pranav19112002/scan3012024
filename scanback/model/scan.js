const mongoose=require("mongoose")


const scanschema = new mongoose.Schema({
    sid:String,
    sname:String,
    sdescription:String,
    samount:Number,
    Status:String
   });



const scanmodel =mongoose.model("Scan",scanschema)
module.exports =scanmodel;


