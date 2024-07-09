const mongoose = require("mongoose");

// creating chat schema
const chatSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required : true
     
  },
  userName: {
    type: String,
    
  },
  userId: {
    type: String,
   
  },
  image: {
    type: String,
     
  },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
