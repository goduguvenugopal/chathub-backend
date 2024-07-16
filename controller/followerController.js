const Follower = require("../model/Follower");

// creating  Follower controller
const saveFollower = async (req, res) => {
  try {
    const { userName, profileId, profilePic, userId , followerId } = req.body;
    const saveFollowers = new  Follower({
      userName,
      profileId,
      profilePic,
      userId , 
      followerId
    });

    await saveFollowers.save();
    res.status(200).json({ message: "Follower added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal server error" });
  }
};

// get all  Followers
const getAllFollowers = async (req, res) => {
  try {
    const  Followers = await  Follower.find();
    res.status(200).json( Followers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal server error" });
  }
};

// delete  Followers by id
const deleteFollowerById = async (req, res) => {
  try {
    const id = req.params.id;
    await  Follower.findByIdAndDelete(id);
    res.status(200).json({ message: " Follower deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { saveFollower, getAllFollowers, deleteFollowerById };
