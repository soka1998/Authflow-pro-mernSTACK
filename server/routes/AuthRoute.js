import {Router} from "express"
import express from "express";
import signup from "../controllers/AuthController.js";


const UserRouter = Router();

UserRouter.post('/signup', signup);


export default UserRouter;