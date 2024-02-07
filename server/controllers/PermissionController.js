import Permission from "../models/PermissionModel";
//create a new permission
const PermissionController = {
  async createPermission(req, res) {
    try {
      const { name } = req.body;

      //Verify if the permission is already exist
      const existingPermission = await PermissionModel.findOne({ name });

      if (existingPermission) {
        return res
          .status(409)
          .json({ message: "This permission already exists" });
      }

      //Create a new permission
      const newPermission = new PermissionModel({ name });

      //save the permission in database
      await newPermission.save();
      return res
        .status(201)
        .json({ message: "Pemission created successfully" });
    } catch (error) {
      console.log(error);
      return res
        .status(201)
        .json({ message: "Error accured when creating the permission" });
    }
  },
  //Retrive permission list
  async getPermission(req, res) {
    try {
      const permissions = await PermissionModel.find();
      return res.status(200).json({ permissions });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Eroor while retrieving permissions list" });
    }
  },
};

module.exports = PermissionController;
