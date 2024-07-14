const Like = require("../model/Like");

// creating like controller
const createLike = async (req, res) => {
  try {
    const { userName, profileId, profilePic, postId } = req.body;
    const saveLikes = new Like({
      userName,
      profileId,
      profilePic,
      postId,
    });

    await saveLikes.save();
    res.status(200).json({ message: "post liked user successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal server error" });
  }
};

// get all likes
const getAllLikes = async (req, res) => {
  try {
    const Likes = await Like.find();
    res.status(200).json(Likes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal server error" });
  }
};

// delete likes by id
const deleteLikeById = async (req, res) => {
  try {
    const id = req.params.id;
    await Like.findByIdAndDelete(id);
    res.status(200).json({ message: "like deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { createLike, getAllLikes, deleteLikeById };
