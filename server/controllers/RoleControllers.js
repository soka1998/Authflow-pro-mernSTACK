import Role from "../models/RoleModel.js";

//Controller methods dor handling role-related operations

export const rolesControllers = {
  createRole: async (req, res) => {
    try {
      const { name } = req.body;
      //check if the role with the same name already exists
      const existingRole = await Role.findOne({ name });
      if (existingRole) {
        return res
          .status(400)
          .json({ error: "Role with this name already exist " });
      }
      //Create new Role
      const newRole = await Role.create({ name });
      res.status(201).json({roleId:newRole._id});
    } catch (error) {
      console.error("Error creating role :", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
   getRoles: async(req,res)=>{
    try {
      const role = await Role.find();
      if(!role){
        return res.status(400).json({error:'Roles not found'})
      }
      res.json(role)
    } catch (error) {
      console.error('Error getting role by Id ',error)
      res.status(500).json({error:'Internal server error '})
    }
  }
};

//Get role by id


