const express = require("express");
const router = express.Router();
const chatController = require("../controller/chatController");
const verifyToken = require("../middleware");

router.post("/send-chat", verifyToken.profileToken, chatController.sendChat);
router.get("/get-all-chats", chatController.getAllChats);
router.delete("/delete-chat" , chatController.deleteChat)

module.exports = router;
