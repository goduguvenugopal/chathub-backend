const mongoose = require("mongoose");

// creating following schema model

const followingSchema = new mongoose.Schema({
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

const Following = mongoose.model("Following", followingSchema);

module.exports = Following;
