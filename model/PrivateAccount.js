const mongoose = require("mongoose");

// privateAccount schema

const privateAccountSchema = new mongoose.Schema({
  profileId: {
    type: String,
    required: true,
  },
});

const privateAccount = mongoose.model("PrivateAccount", privateAccountSchema);

module.exports = privateAccount;
