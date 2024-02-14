import {Router} from "express"
import UserController from "../controllers/AuthController.js";


const authRouts = Router();
/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '409':
 *         description: Email already in use
 *       '500':
 *         description: Internal Server Error
 */


authRouts.post('/signup', UserController.signup);
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Log in to the application
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Logged in successfully
 *       '401':
 *         description: User not found or Invalid credentials
 *       '500':
 *         description: Internal Server Error
 */


// Route for user login
authRouts.post('/login',UserController.login);
//Route for user logout 
/**
 * @swagger
 * /api/auth/logout:
 *   get:
 *     summary: Log out from the application
 *     tags: [Authentication]
 *     responses:
 *       '200':
 *         description: Successfully logged out
 *       '500':
 *         description: Internal Server Error
 */
authRouts.get('/logout',UserController.logout)


export default authRouts;