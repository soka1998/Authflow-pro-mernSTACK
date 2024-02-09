import {Router} from "express"
import {rolesControllers} from '../controllers/RoleControllers.js'
import { assignRoleToUser } from "../controllers/AssignRoles.js";

const RolesRouter = Router();

RolesRouter.post('/', rolesControllers.createRole);
RolesRouter.get('/', rolesControllers.getRoles);
RolesRouter.patch('/assign',assignRoleToUser);

export default RolesRouter;