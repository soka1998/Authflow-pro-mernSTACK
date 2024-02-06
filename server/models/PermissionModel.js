import mongoose from 'mongoose';

const permissionSchema = new mongoose.Schema({
  name: { 
    type: String , 
    required: true, 
    unique: true 
},
  
});

const PermissionModel = mongoose.model('Permission', permissionSchema);

module.exports = PermissionModel;
