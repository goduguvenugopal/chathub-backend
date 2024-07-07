const mongoose = require("mongoose");

// creating profile schema

const profileSchema = new mongoose.Schema({
  profileName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type: String,
  },
  image: {
    type: String,
  },
  user: {
    type: String,
    required  : true
  },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
