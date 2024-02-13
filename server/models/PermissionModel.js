import mongoose from "mongoose";

const permissionShema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});
const permissionModel= mongoose.model("Permission", permissionShema);
export default permissionModel;
