const PersonalChat = require("../model/PersonalChat");

// send text controlloer

const sendChat = async (req, res) => {
  try {
    const { text, date, userName, userId, image, groupId , photo } = req.body;

    const saveChat = new PersonalChat({
      text,
      userName,
      userId,
      date,
      image,
      groupId,
      photo
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
    const allChats = await PersonalChat.find();
    res.status(200).json(allChats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "internal server error" });
  }
};

// delete single chat

const deleteChat = async (req, res) => {
  try {
    const chatId = req.params.chatId;
    await PersonalChat.findByIdAndDelete(chatId);
    res.status(200).json({ Message: "message deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "internal server error" });
  }
};

// deleteing all messages function

const deleteAllChats = async (req, res) => {
  try {
    const { userId } = req.body;
    await PersonalChat.deleteMany({ userId });
    res.status(200).json({ message: "All chats deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { sendChat, getAllChats, deleteChat, deleteAllChats };
