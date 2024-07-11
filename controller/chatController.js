const Chat = require("../model/Chat");
 
// send text controlloer

const sendChat = async (req, res) => {
  try {
    const { text, date, userName, userId, image } = req.body;
  
    const saveChat = new Chat({
      text,
      userName,
      userId,
      date,
      image,
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

// delete single chat

const deleteChat = async (req, res) => {
  try {
    const chatId = req.params.chatId;
    await Chat.findByIdAndDelete(chatId);
    res.status(200).json({ Message: "message deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "internal server error" });
  }
};

module.exports = { sendChat, getAllChats, deleteChat };
