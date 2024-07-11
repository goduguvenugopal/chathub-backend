const express = require("express");
const router = express.Router();
const messageController = require("../controller/messageController");

// routes defining

router.post("/send-message", messageController.sendMessage);
router.get("/get-all-messages", messageController.getAllMessages);
router.delete("/delete-message/:id", messageController.deleteMessage);
router.delete("/delete-all-messages", messageController.deleteAllMessages);

module.exports = router;
