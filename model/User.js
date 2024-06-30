const mongoose = require("mongoose");

// creating user schema
const userShema = new mongoose.Schema({
 
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User" , userShema)

module.exports = User
