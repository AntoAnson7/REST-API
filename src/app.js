const { Router } = require("express");
const express=require("express");
require("./database/connection");
const studentRouter=require("./routers/student")
const Student=require("./models/students")
const app=express();
const port=process.env.PORT || 4000;

app.use(express.json());
app.use(studentRouter);

app.listen(port,()=>{
    console.log(`Connection established at port ${port}`);
})