import User from "../models/UserModel.js"
import bcrypt from "bcrypt";
import  jwt from 'jsonwebtoken';
import {config} from "dotenv";

config();
//signup function
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
           const newUser= new User({
            username,
            email,
            password : passHash
           })
            //save user in database
            await newUser.save();
            res.status(201).json({success:true,message:'Use created successfully!'})
    } catch (error) {
        console.log('Error in SignUp', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
      }
        
    }

    //login function




export default signup;