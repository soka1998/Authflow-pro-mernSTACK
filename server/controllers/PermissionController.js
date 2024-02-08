import permissionShema  from "../models/PermissionModel";


//Controller for handling CRUD operations related to permissions
const createPermission  = async(req,res)=>{
    //Crreat new permission 
     
        try {
            const {name}=req.body;
            //check if the permisssion already exists
            const exxistingPermission = await PermissionStatus.findOne({name});
            if(exxistingPermission){
                return res.status(400).json({error:'Permission already exists'})

            }
            //Create the new permission
            const newPermission = new PermissionStatus({name});
            await newPermission.save();
            res.status(201).json(newPermission);
        } catch (error) {
            console.error('Error crezating permission :' ,error);
            res.status(500).json({ error: 'Server Error!' });
        }
            
        }
        // Get All Permission
        const getAllPermissions=async(req,res)=> {
            try {
                const permission = await PermissionStatus.find();
                res.json(permission)
            } catch (error) {
                console.error('Error fetching permission: ',error)
                res.status(500).json({error:'Internal server error'})
                
            }}
       //Get a Single permission by ID 
       const getPermissionById =async  (req,res)=>{
        try {
            const {id} = req.params;
            const permission = await PermissionStatus.findById(id);
            if(!permission){
                return res.status(400).json({error:'Permission not found'})
            }
            res.json(permission)
            
        } catch (error) {
            console.error('Error fetching permission by ID',error);
            res.status(500).json({error:"Couldn't find that"})
            
        }
       }

        // Update a permission by ID
  const updatePermissionById= async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const updatedPermission = await Permission.findByIdAndUpdate(id, { name }, { new: true });
      if (!updatedPermission) {
        return res.status(404).json({ error: 'Permission not found' });
      }
      res.json(updatedPermission);
    } catch (error) {
      console.error('Error updating permission by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  // Delete a single permission by its Id
   const deletePermissionById =async (req, res) => {
        try {
          const { id } = req.params;
          const deletedPermission = await Permission.findByIdAndDelete(id);
          if (!deletedPermission) {
            return res.status(404).json({ error: 'Permission not found' });
          }
          res.json({ message: 'Permission deleted successfully' });
        } catch (error) {
          console.error('Error deleting permission by ID:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      }
    
    



const PermissionController= {createPermission,deletePermissionById ,updatePermissionById,getPermissionById ,getAllPermissions}
  export default PermissionController;
    
