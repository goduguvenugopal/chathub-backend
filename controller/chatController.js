const Chat = require("../model/Chat");
const Profile = require("../model/Profile");
// send text controlloer

const sendChat = async (req, res) => {
  try {
    const { text } = req.body;
    const userProfile = await Profile.findById(req.profileId);
    if (!userProfile) {
      res.status(404).json({ Message: "profile not found" });
    }
    // current time
    const currentDate = new Date().toLocaleString("en-GB");
    const saveChat = new Chat({
      text,
      userName: userProfile.userName,
      userId: userProfile._id,
      Date: currentDate,
      image: userProfile.image,
    });

    await saveChat.save();
    res.status(200).json({ Message: "chat has sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "internal server error" });
  }
};

// get all chats controlloer function

const getAllChats = async (req, res) => {
  try {
    const allChats = await Chat.find();
    res.status(200).json(allChats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "internal server error" });
  }
};

module.exports = { sendChat , getAllChats};
