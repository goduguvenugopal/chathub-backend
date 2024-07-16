const mongoose = require("mongoose");

// creating follower schema model

const followerSchema = new mongoose.Schema({
  profileId: {
    type: String,
    required: true,
  },
  followerId: {
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
  userId: {
    type: String,
    required: true,
  },
});

const Follower = mongoose.model("Follower", followerSchema);

module.exports = Follower;
