const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true ,
},
  email: { 
     type: String,
     required:  [true, 'Please enter an email'],
     unique: true ,
     lowercase: true,
     validate :[isEmail, 'Please enter a valid email'],
    },
  password: {
     type: String,
      required:[true, 'please enter a valid email'],
      minlength: [6, 'At least enter 6 character'],
    }
  });

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
