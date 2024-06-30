const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware")
const messageRoutes = require("../controller/messageController");

// routes defining

router.post("/send-message",verifyToken.profileToken,messageRoutes.sendMessage);
 
module.exports = router