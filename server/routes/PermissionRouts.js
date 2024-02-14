import {Router} from "express"
import permission from '../controllers/PermissionController.js'
import { assignPermissionToRole } from "../controllers/AssignRoles.js";
import requireAuth from "../middleware/AuthMiddleware.js";

const permissionsRouter = Router();
/**
 * @swagger
 * tags:
 *   name: Permissions
 *   description: CRUD operations related to permissions
 */


/**
 * @swagger
 * /api/permissions:
 *   post:
 *     summary: Create a new permission
 *     tags: [Permissions]
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
 *         description: Permission created successfully
 *       '400':
 *         description: Permission already exists
 *       '500':
 *         description: Internal Server Error
 */

permissionsRouter.post('/', permission.createPermission);


/**
 * @swagger
 * /api/permissions:
 *   get:
 *     summary: Get all permissions
 *     tags: [Permissions]
 *     responses:
 *       '200':
 *         description: Retrieved all permissions successfully
 *       '500':
 *         description: Internal Server Error
 */


permissionsRouter.get('/', requireAuth,permission.getAllPermissions);
/**
 * @swagger
 * /api/permissions/{id}:
 *   put:
 *     summary: Update a permission by ID
 *     tags: [Permissions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the permission to update
 *         schema:
 *           type: string
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
 *       '200':
 *         description: Permission updated successfully
 *       '404':
 *         description: Permission not found
 *       '500':
 *         description: Internal Server Error
 */
permissionsRouter.put('/assign',assignPermissionToRole);
permissionsRouter.patch('/:id', permission.updatePermissionById);
/**
 * @swagger
 * /api/permissions/{id}:
 *   delete:
 *     summary: Delete a permission by ID
 *     tags: [Permissions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the permission to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Permission deleted successfully
 *       '404':
 *         description: Permission not found
 *       '500':
 *         description: Internal Server Error
 */
permissionsRouter.delete('/', permission.deletePermissionById);

export default permissionsRouter;