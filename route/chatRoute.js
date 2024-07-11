const express = require("express");
const router = express.Router();
const chatController = require("../controller/chatController");

router.post("/send-chat", chatController.sendChat);
router.get("/get-all-chats", chatController.getAllChats);
router.delete("/delete-chat/:chatId", chatController.deleteChat);

module.exports = router;
