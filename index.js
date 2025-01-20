const express=require('express');
const connectDB=require('./config/db');
const userRoute=require('./routes/userRoute');





const app=express();


app.get('/',(req,res)=>{
    try{
        res.send("Hello World")
    }catch(error){
        res.send(500).send("server error")
    }
})




app.use(express.json());

app.use("/api/user",userRoute);




app.listen((8000),async()=>{
    try{
       await connectDB();
        console.log("Listening on port 8000")
    }catch(error){
        console.log(error.message)
    }
})