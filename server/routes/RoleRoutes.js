import {Router} from "express"
import {rolesControllers} from '../controllers/RoleControllers.js'
import { assignRoleToUser } from "../controllers/AssignRoles.js";

const RolesRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: CRUD operations related to roles
 */

/**
 * @swagger
 * /api/roles:
 *   post:
 *     summary: Create a new role
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Role created successfully
 *       '400':
 *         description: Role with this name already exists
 *       '500':
 *         description: Internal Server Error
 */
RolesRouter.post('/', rolesControllers.createRole);

/**
 * @swagger
 * /api/roles:
 *   get:
 *     summary: Get all roles
 *     tags: [Roles]
 *     responses:
 *       '200':
 *         description: Retrieved all roles successfully
 *       '400':
 *         description: Roles not found
 *       '500':
 *         description: Internal Server Error
 */
RolesRouter.get('/', rolesControllers.getRoles);
RolesRouter.patch('/assign',assignRoleToUser);

export default RolesRouter;