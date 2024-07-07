const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware");
const messageRoutes = require("../controller/messageController");

// routes defining

router.post(
  "/send-message",
  verifyToken.profileToken,
  messageRoutes.sendMessage
);
router.get("/get-all-messages", messageRoutes.getAllMessages);
router.get("/get-individual-messages/:id", messageRoutes.getIndividualMsg);
router.delete("/delete-message/:id", messageRoutes.deleteMessage);
router.delete("/delete-all-messages", messageRoutes.deleteAllMessages);

module.exports = router;
