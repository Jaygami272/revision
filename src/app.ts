import express from 'express';
const app=express();

app.listen(3000,(err)=>{
        if(err){
            console.log("failed to start servers");
        }else{
            console.log("server is running");
        }
});

