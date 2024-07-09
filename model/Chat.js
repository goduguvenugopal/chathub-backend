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
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
