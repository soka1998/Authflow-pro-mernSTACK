import {Router} from "express"
import permission from '../controllers/PermissionController.js'
import { assignPermissionToRole } from "../controllers/AssignRoles.js";
import requireAuth from "../middleware/AuthMiddleware.js";

const permissionsRouter = Router();

permissionsRouter.post('/', permission.createPermission);
permissionsRouter.get('/', requireAuth,permission.getAllPermissions);
permissionsRouter.put('/assign',assignPermissionToRole);
permissionsRouter.patch('/:id', permission.updatePermissionById);
permissionsRouter.delete('/', permission.deletePermissionById);

export default permissionsRouter;