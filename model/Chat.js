const mongoose = require("mongoose");

// creating chat schema
const chatSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  userName: {
    type: string,
    required: true,
  },
  userId: {
    type: string,
    required: true,
  },
  image: {
    type: string,
    required: true,
  },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
