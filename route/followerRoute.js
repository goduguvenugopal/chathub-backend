const express = require("express");
const router = express.Router();
const followerController = require("../controller/followerController");

router.post("/follower", followerController.saveFollower);
router.get("/get-followers", followerController.getAllFollowers);
router.delete("/delete-follower/:id", followerController.deleteFollowerById);

module.exports = router;
