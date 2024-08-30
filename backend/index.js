import express from'express'
import mongodb from 'mongoose'
import jwt from'jsonwebtoken'
import cors from'cors'
import { userinput } from './types';
import { Admin, User } from './db';

const SECRET ='Secret';
const app = express();

const port = 3000;

app.use(cors());
app.use(exprss.json());

const authenticateJWT = (req,res,next)=>{
    const authHeader = req.headers.auhtentication;
    if(authHeader){
        const token = authHeader;
        jwt.verify(token,SECRET,(err,user)=>{
            if(err){
                return res.sendStatus(403);
            }
            req.user= user;
            next();
        })
    }else{
        res.sendStatus(401);
    }
}

app.post('/admin/signup',async(req,res)=>{
    const{username,password}= req.body;
    const payload = {username,payload};
    const parsedPayload = userinput.safeParse(payload);
    if(!parsedPayload.success){
        res.status(411).json({
            message:"Invalid Input"
        })
    }else{
        const admin = await Admin.findOne({username});
        if (admin){
            res.status(403).json({
                message:"Amin already exists"
            });
        }else{
            const token = jwt.sign({username, role:'admin'},SECRET,{expiresIn:"1h"});
            const newadmin = await new Admin({id:token,username:username, password:password});
            await newadmin.save();

            
            res.json({message:"ADmin created successfully",token});
        }
    }   

})

app.post('/admin/login',async (req,res)=>{
    const payload={username,password};
    const parsedPayload = userinput.safeParse(payload);
    if(!parsedPayload.success){
        res.status(411).json({
            message:"Invalid Input"
        })
    }else{
        const token  = jwt.sign ({username,role:'admin'},SECRET,{expiresI:"1h"});
        const admin = Admin.findOne({username:username, password:password})
        if(admin){
            res.json({
                message:"Admin was logeed in succesfully"
            })
        }
    }
})

app.post ('users/signup',async (req,res)=>{
    const payload  = {username,payload};
    const parsedParsed = userinput.safeParse(payload);
    if(!parsedParsed.success){
        res.status(411).json({
            message:"Invalid Input"
        })
    }else{
        const user = await User.findOne({username:username})
        if(user){
            res.json({
                message:"User already exists"
            })
        }else{
            const token = jwt.sign({username,role:'user'}, SECRET,{expiresIn:"1h"});
            const newUser= await new User({id:token , username:username, password:password});
            await newUser.save();

            res.json({
                messgae:"New USer created"
            })
        }
        
         
    }
})

app.post('/user/login',async(req,res)=>{
    const{username,password}= req.body;
    const payload={username,password};
    const parsedPayload= userinput.safeParse(payload);
    if(!parsedPayload.success){
        res.status(411).json({messgae:"Invalid Input"});
        return;
    }else{
        const token=jwt.sign({username:username, password:password},SECRET,{expiresIn:"1h"});
        res.json({message:"USer was logged in successfully"})
    }
})