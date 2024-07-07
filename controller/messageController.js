const Message = require("../model/Message");
const Profile = require("../model/Profile");

// creating message controller
const sendMessage = async (req, res) => {
  try {
    const { message, postImage } = req.body;
    // finding profile details
    const profile = await Profile.findById(req.profileId);
    if (!profile) {
      res.status(404).json({ Message: "profile not found" });
    }

    const currentDate = new Date().toLocaleDateString("en-GB");

    // saving in database message details
    const saveMessage = new Message({
      message,
      postImage,
      profileImage: profile.image,
      userName: profile.userName,
      profileId: profile._id,
      date: currentDate,
    });

    await saveMessage.save();
    res.status(200).json({ message: "message has sent successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};

// get all messages function

const getAllMessages = async (req, res) => {
  try {
    const allMessages = await Message.find();
    if (!allMessages) {
      res.status(404).json({ message: "messages not found" });
    }
    res
      .status(200)
      .json({ message: "messages fetched successfully", allMessages });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};

// get individual messages
const getIndividualMsg = async (req, res) => {
  try {
    const { profileId } = req.body;
    const getMessages = await Message.find({ profileId });

    if (!getMessages) {
      res.status(404).json({ message: "messages not found" });
    }

    res
      .status(200)
      .json({ message: "messages fetched successfully", data : getMessages });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};

// delete messages by id
const deleteMessage = async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "message deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};

// deleteing all messages function

const deleteAllMessages = async (req, res) => {
  try {
    const { profileId } = req.body;
    await Message.deleteMany({ profileId });
    res.status(200).json({ message: "All messages deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = {
  sendMessage,
  getAllMessages,
  getIndividualMsg,
  deleteMessage,
  deleteAllMessages
};
