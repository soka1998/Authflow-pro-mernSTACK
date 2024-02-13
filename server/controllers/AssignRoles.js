import permissionModel from "../models/PermissionModel.js";
import Role from "../models/RoleModel.js";
import User from "../models/UserModel.js";
//Function to assign roles to auser
export const assignRoleToUser = async (req,res) => {

  const {userId,roleId} = req.body;
  try {
    //Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("The user does not exist");
    }
    //Find the role by ID
    const role = await Role.findById(roleId);
    if (!role) {
      throw new Error("Role not found");
    }

    //Assign the role to the user
    user.role =roleId;
    await user.save();
    return res.status(200).json({ message: "Role assigned successfully" });
  } catch (error) {
    console.error("Error assigning role to user:", error);


    throw new Error("Failed to assign role to user");
    res.status(500).json({ error: "Internal server error" });

  }
};
export const assignPermissionToRole = async (req,res) => {

  const {permissionId,roleId} = req.body;
  try {
    //Find the user by ID
    const permission = await permissionModel.findById(permissionId);

    if (!permission) {
      throw new Error("The permission does not exist");
    }
    //Find the role by ID
    const role = await Role.findById(roleId);
    if (!role) {
      throw new Error("Role not found");
    }

    //Assign the role to the user
    role.permissions.push(permissionId);
    await role.save();
    return res.status(200).json({ message: "Role assigned successfully" });
  } catch (error) {
    console.error("Error assigning role to user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

