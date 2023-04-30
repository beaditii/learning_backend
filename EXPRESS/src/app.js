const express=require('express');
const app = express();
const sendMail=require("../controllers/sendMail");

app.get('/',(req,res)=>{
    res.send('I am server');
});

app.get("/mail",sendMail);

const start=async()=>{
    try{
        app.listen(5000,()=>{
            console.log('hey i am port 5000')
        });
    }
    catch(error){
  res.send("error");
    }
};
start();