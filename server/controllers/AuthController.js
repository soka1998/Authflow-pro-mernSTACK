import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();
//signup function
const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send({ error: "Email already in use" });
    }
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const passHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: passHash,
    });
    //save user in database
    await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "Use created successfully!" });
  } catch (error) {
    console.log("Error in SignUp", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

//login function
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //Find user by email
    const userLogin = await User.findOne({ email });
    if (!userLogin) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }
    //compare passwords
    const passwordMatch = await bcrypt.compare(password, userLogin.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
    //Create and send JWT token
    const token = jwt.sign({ userId: userLogin._id,role:userLogin.role }, process.env.Secret_key, {
      expiresIn: "10h",
    });
    res.cookie("token", token);
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).json({ error: "Internal server error" + error });
  }
};
//Logout method
const logout = (req, res) => {
 
    try {
        res.clearCookie('token')
        res.status(200).json({success:true,message:"Successfully logged out!"})
    } catch (error) {
        res.status(500).json({success:false,message:'something went wrong'});
    }
  
};

const UserController = { signup, login ,logout};
export default UserController;
