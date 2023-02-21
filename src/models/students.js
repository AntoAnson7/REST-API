const mongoose=require("mongoose");
const validator=require("validator")


const studentSchema=new mongoose.Schema({
    name:{type:String,required:true},
    rno:{type:Number,required:true,unique:[true,"Rno exists"]},
    email:{
        type:String,
        required:true,
        unique:[true,"Email already exists"],
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Invalid Email")
                        }}}
    })

// new collection

const Student=new mongoose.model("Student",studentSchema)
module.exports=Student;