import mongoose from  'mongoose';


const permissionShema= new mongoose.Schema({
    name: { type: String, 
        required: true ,
    unique:true
}, 
})

export default  permissionShema ;