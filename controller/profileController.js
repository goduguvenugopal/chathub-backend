const User = require("../model/User");
const Profile = require("../model/Profile");
const jwt = require("jsonwebtoken");
const dotEnv = require("dotenv");

dotEnv.config();

const secretKey = process.env.SECRETKEY1;
// creating profile controller logic

const createProfile = async (req, res) => {
  try {
    const { profileName, userName, bio, image } = req.body;

    // Check if the username already exists
    const existsUserName = await Profile.findOne({ userName });
    if (existsUserName) {
      res.status(404).json({ message: "username already existed" });
    }

    // Check if the user already exists
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create and save the new profile
    const saveProfile = new Profile({
      profileName,
      userName,
      bio,
      image,
      user: user._id,
    });

    await saveProfile.save();

    const profi = await Profile.findOne({ userName });

    const token = jwt.sign({ profileId: profi._id }, secretKey);

    res.status(200).json({ message: "profile created", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server Error" });
  }
};

// finding profiles by id function

const findProfile = async (req, res) => {
  try {
    const { user } = req.body;
    const profile = await Profile.findOne({ user });
    if (!profile) {
      res.status(404).json({ message: "profile not found" });
    }
    res.status(200).json(profile);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server Error" });
  }
};

// finding profile by userName function

const findProfileByName = async (req, res) => {
  try {
    const { userName } = req.body;
    const getProfile = await Profile.findOne({ userName });
    if (!getProfile) {
      res.status(404).json({ message: "profile not found" });
    }
    res.status(200).json(getProfile);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server Error" });
  }
};

// delete profile controller code

const deleteProfile = async (req, res) => {
  try {
    const profileId = req.params.id;
    await Profile.findByIdAndDelete(profileId);
    res.status(200).json({ message: "profile has been deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server Error" });
  }
};

module.exports = { createProfile, findProfile, findProfileByName , deleteProfile };
