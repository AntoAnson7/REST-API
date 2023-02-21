const express=require("express");
const router=new express.Router();
const Student=require("../models/students")

router.get("/app",(req,res)=>{
    res.send("Success");
});

// create new student
router.post("/students",async(req,res)=>{
    try{
        const user=new Student(req.body)
        console.log(req.body);
        const createUser=await user.save();
        res.status(201).send(createUser);
    }
    catch(e){
        res.send(400).send(e); 
    }

})

// get student details
router.get("/students",async(req,res,)=>{
    try{
        const retreivedStudent=await Student.find({},{_id:0,__v:0});
        res.status(201).send(retreivedStudent);
    }
    catch(e){
        res.send(400).send(e); 
    }
})

// get by rno
router.get("/students/:rno",async(req,res,)=>{
    try{
        const _id1=req.params.rno;
        const retreivedStudent=await Student.find({rno:_id1},{_id:0,__v:0});
        res.status(201).send(retreivedStudent);
    }
    catch(e){
        res.send(400).send(e); 
    }
})

module.exports=router;

