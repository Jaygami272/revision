import type{ Request,Response } from "express";
class Usercontroller{
    getuser=(req:Request,res:Response)=>{
        res.send("login controller");
    }
}