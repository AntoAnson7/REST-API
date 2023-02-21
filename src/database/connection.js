const mongoose=require("mongoose");
const pwd="Mikha%402011";
mongoose.set('strictQuery',false);
const uri=`mongodb+srv://AntoAnson:${pwd}@cluster0.hhqsdi3.mongodb.net/?retryWrites=true&w=majority/studentsapi`;


async function connect(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/students_api");
        console.log("Connection Established");
    }
    catch(err){
        console.log(`Connection Failed - Fatal Error: ${err}`);
    }
}


connect();

