const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware");
const messageController = require("../controller/messageController");

// routes defining

router.post(
  "/send-message",
  verifyToken.profileToken,
  messageController.sendMessage
);
router.get("/get-all-messages", messageController.getAllMessages);
router.get("/get-individual-messages/:profileId", messageController.getIndividualMsg);
router.delete("/delete-message/:id", messageController.deleteMessage);
router.delete("/delete-all-messages", messageController.deleteAllMessages);

module.exports = router;
