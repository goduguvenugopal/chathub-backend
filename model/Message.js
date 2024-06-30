const mongoose = require("mongoose");

// creating message schema

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  postImage: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
  },
  userName: {
    type: String,
  },

  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
