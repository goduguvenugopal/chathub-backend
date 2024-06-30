const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware")
const profileRoutes = require("../controller/profileController");

// routes defining

router.post("/create-profile",verifyToken.userToken,profileRoutes.createProfile);
router.get("/get-profile-byid" , profileRoutes.findProfile)
router.get("/get-profile-byname" , profileRoutes.findProfileByName)

module.exports = router