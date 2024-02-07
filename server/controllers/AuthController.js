import {User} from "../models/UserModel.js"
import bcrypt from "bcrypt";
import  jwt from 'jsonwebtoken';
import {config} from "dotenv";

config();

const signup = async (req, res) =>{
    const {username,email,password}= req.body;
    try {
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(409).send({error:'Email already in use'})
            }
            //Hash password
            const salt = await bcrypt.genSalt(10);
            const passHash= await bcrypt.hash(password,salt);
            //creat token for authentification
            const token = jwt.sign({userId:newUser._id, username:newUser.username},process.env.Secret_key,{expireIn:'2h'})
           const newUser= await User.create({username,email,password:passHash});
            //save user in database
            await newUser.save();

            res.status(201).json({success:true,message:'Use created successfully!',token})
    } catch (error) {
        console.log('Error in SignUp', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
      }
        
    }




module.exports={signup};