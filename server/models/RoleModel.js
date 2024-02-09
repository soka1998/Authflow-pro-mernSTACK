import mongoose from "mongoose";

// Define the role schema
const roleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Permission" }],
});

// Create and export the role model
const roles= mongoose.model("Role", roleSchema);
export default roles;
