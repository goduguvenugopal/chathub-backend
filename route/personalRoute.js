const express = require("express");
const router = express.Router();
const personalChatController = require("../controller/personalController");

router.post("/send-chat", personalChatController.sendChat);
router.get("/get-all-chats", personalChatController.getAllChats);
router.delete("/delete-chat/:chatId", personalChatController.deleteChat);
router.delete("/delete-all-chats", personalChatController.deleteAllChats);

module.exports = router;
