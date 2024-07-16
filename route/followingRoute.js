const express = require("express");
const router = express.Router();
const followingController = require("../controller/followingController");

router.post("/following", followingController.saveFollowing);
router.get("/get-followings", followingController.getAllFollowings);
router.delete("/delete-following/:id", followingController.deleteFollowingById);

module.exports = router;
