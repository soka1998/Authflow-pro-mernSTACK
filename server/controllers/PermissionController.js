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


        export default createPermission;
    
