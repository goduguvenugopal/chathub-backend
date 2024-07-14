const mongoose = require("mongoose");

// creating like schema model

const likeSchema = new mongoose.Schema({
  profileId: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
});


const Like = mongoose.model("Like", likeSchema)

module.exports = Like