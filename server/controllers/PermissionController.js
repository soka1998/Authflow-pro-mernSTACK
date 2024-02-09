import permissionShema from "../models/PermissionModel.js";

//Controller for handling CRUD operations related to permissions
const createPermission = async (req, res) => {
  //Crreat new permission

  try {
    const { name } = req.body;
    //check if the permisssion already exists
    const exxistingPermission = await permissionShema.findOne({ name });
    if (exxistingPermission) {
      return res.status(400).json({ error: "Permission already exists" });
    }
    //Create the new permission
    const newPermission = new permissionShema({ name });
    await newPermission.save();
    res.status(201).json(newPermission);
  } catch (error) {
    console.error("Error crezating permission :", error);
    res.status(500).json({ error: "Server Error!" });
  }
};
// Get All Permission
const getAllPermissions = async (req, res) => {
  try {
    const permission = await permissionShema.find();
    res.json({permission});
  } catch (error) {
    console.log(error)
    console.error("Error fetching permission: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update a permission by ID
const updatePermissionById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    console.log(name)
    const updatedPermission = await permissionShema.updateOne(
      {_id:id},
      { name },
      { new: true }
    );
    if (!updatedPermission) {
      return res.status(404).json({ error: "Permission not found" });
    }
    res.json(updatedPermission);
  } catch (error) {
    console.error("Error updating permission by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// Delete a single permission by its Id
const deletePermissionById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPermission = await permissionShema.findByIdAndDelete(id);
    if (!deletedPermission) {
      return res.status(404).json({ error: "Permission not found" });
    }
    res.json({ message: "Permission deleted successfully" });
  } catch (error) {
    console.error("Error deleting permission by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const PermissionController = {
  createPermission,
  deletePermissionById,
  updatePermissionById,
  getAllPermissions,
};
export default PermissionController;
