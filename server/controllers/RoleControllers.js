import Role from "../models/RoleModel";

//Controller methods dor handling role-related operations

const RoleController = async (req, res) => {
  try {
    const { name } = req.body;
    //check if the role with the same name already exists
    const existingRole = await Role.findOne({ name });
    if (existingRole) {
      return res
        .status(400)
        .json({ error: "Role with this name alreadyexist " });
    }
    //Create new Role
    const newRole = await Role.create({ name });
    res.status(201).json(newRole);
  } catch (error) {
    console.error("Error creating role :", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = RoleController;
