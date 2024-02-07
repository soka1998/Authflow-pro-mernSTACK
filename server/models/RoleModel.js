import  mongoose from 'mongoose';

// Define the role schema
const roleSchema = new mongoose.Schema({
  name: { type: String, 
    required: true } 
});

// Create and export the role model
module.exports = mongoose.model('Role', roleSchema);
