import Role from "../models/RoleModel";
import User from "../models/UserModel";
//Function to assign roles to auser
const assignRoleToUser = async (userId, roleId) => {
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
    user.roles.push(roleId);
    await user.save();
    return { message: "Role assigned successfully" };
  } catch (error) {
    console.error("Error assigning role to user:", error);
    throw new Error("Failed to assign role to user");
  }
};

export default assignRoleToUser;
