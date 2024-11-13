const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { 
    type: String, 
    required: true
  },
  email: { 
    type: String, 
    required: true, 
    unique: true
  },
  password: { 
    type: String,
    required: true 
  },
  cpassword: {
    type: String, 
    required: true
  },
  isAdmin: { 
    type: Boolean, 
    default: false 
  },
});

const User = mongoose.model("Users", UserSchema)
module.exports = User