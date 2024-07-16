const Following = require("../model/Following");

// creating  Following controller
const saveFollowing = async (req, res) => {
  try {
    const { userName, profileId, profilePic, userId, followerId } = req.body;
    const saveFollowings = new Following({
      userName,
      profileId,
      profilePic,
      userId,
      followerId,
    });

    await saveFollowings.save();
    res.status(200).json({ message: "Following added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal server error" });
  }
};

// get all  Followings
const getAllFollowings = async (req, res) => {
  try {
    const Followings = await Following.find();
    res.status(200).json(Followings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal server error" });
  }
};

// delete  Followings by id
const deleteFollowingById = async (req, res) => {
  try {
    const id = req.params.id;
    await Following.findByIdAndDelete(id);
    res.status(200).json({ message: " Following deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { saveFollowing, getAllFollowings, deleteFollowingById };
