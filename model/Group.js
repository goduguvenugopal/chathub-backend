const mongoose = require("mongoose");

// creating group schema

const groupSchema = new mongoose.Schema({
  admin: {
    type: String,
    required: true,
  },
  groupName: {
    type: String,
    required: true,
  },
  adminProfileId: {
    type: String,
    required: true,
  },
  profileId1: {
    type: String,
    required: true,
  },
  profileId2: {
    type: String,
  },
  profileId3: {
    type: String,
  },
  profileId4: {
    type: String,
  },
  profileId5: {
    type: String,
  },
  profileId6: {
    type: String,
  },
  profileId7: {
    type: String,
  },
  profileId8: {
    type: String,
  },
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
