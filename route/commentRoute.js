const express = require("express");
const router = express.Router();
const commentController = require("../controller/commentController");

router.post("/send-comment", commentController.sendComment);
router.get("/get-all-comments", commentController.getAllComments);
router.delete("/delete-comment/:id", commentController.deleteComment);

module.exports = router;
