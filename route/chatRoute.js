const express = require("express");
const router = express.Router();
const chatController = require("../controller/chatController");
const verfifyToken = require("../middleware");

router.post("/send-chat", verfifyToken.profileToken, chatController.sendChat);
router.get("/get-all-chats", chatController.getAllChats);

module.exports = router;
