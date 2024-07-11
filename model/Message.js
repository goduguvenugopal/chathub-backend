const mongoose = require("mongoose");

// creating message schema

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  postImage: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },

  profileId: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
