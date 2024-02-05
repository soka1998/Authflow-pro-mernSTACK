import express from 'express';
import mongoose, { connect } from 'mongoose';
import {config} from "dotenv";
import cookieParser from 'cookie-parser';
import cors from 'cors';

config()


const app =  express();
app.use(cors())
app.use(express.json());
app.use(cookieParser())
// app.use("/api",router)
// app.use("/user",UserRouter)  

const PORT = process.env.PORT || 4000

connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mongodb connected successfully")
})
.catch ((error) => {
    console.log("mongodb not connected ", error)
})      

// swaggerDocs(app, PORT )

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})