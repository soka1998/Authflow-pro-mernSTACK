import express from 'express';
import mongoose, { connect } from 'mongoose';
import {config} from "dotenv";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import UserRouter from '../routes/AuthRoute.js';
import RolesRouter from '../routes/RoleRoutes.js';
import permissionsRouter from '../routes/PermissionRouts.js';

config() ; 


const app =  express();
app.use(cors())
app.use(express.json());
app.use(cookieParser())

app.use("/auth",UserRouter)  
app.use("/roles",RolesRouter)  
app.use("/permissions",permissionsRouter)  

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