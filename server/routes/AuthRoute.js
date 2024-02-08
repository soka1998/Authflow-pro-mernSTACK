import {Router} from "express"
import express from "express";
import UserController from "../controllers/AuthController.js";


const UserRouter = Router();

UserRouter.post('/signup', UserController.signup);
// Route for user login
UserRouter.post('/login',UserController.login);


export default UserRouter;