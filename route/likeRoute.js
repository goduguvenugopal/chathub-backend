const express = require("express");
const router = express.Router();
const likeController = require("../controller/likeController");

router.post("/like-post", likeController.createLike);
router.get("/get-likes", likeController.getAllLikes);
router.delete("/delete-like/:id", likeController.deleteLikeById);

module.exports = router;
