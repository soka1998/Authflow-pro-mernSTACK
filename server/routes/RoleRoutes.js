import {Router} from "express";
import express from "express";
import RoleController from '../controllers/RoleControllers'


const RoleController= Router();

//Route for creating a new role
Router.post('/',RoleController.newRole); 

//Rout for getting a role by ID 
Router.get('/:roleId',RoleController.getRoleById);

export default RoleController;