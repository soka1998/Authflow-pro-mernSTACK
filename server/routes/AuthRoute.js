import {Router} from "express"
import UserController from "../controllers/AuthController.js";


const authRouts = Router();

authRouts.post('/signup', UserController.signup);
// Route for user login
authRouts.post('/login',UserController.login);
//Route for user logout 
authRouts.get('/logout',UserController.logout)


export default authRouts;