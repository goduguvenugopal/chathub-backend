const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware")
const profileController = require("../controller/profileController");

// routes defining

router.post("/create-profile",verifyToken.userToken,profileController.createProfile);
router.get("/get-profile-byid" , profileController.findProfile)
router.get("/get-profile-byname" , profileController.findProfileByName)
router.delete("/delete-profile/:id" , profileController.deleteProfile)
router.put("/update-photo",profileController.updatePhoto)

module.exports = router