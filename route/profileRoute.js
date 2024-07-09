const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware")
const profileController = require("../controller/profileController");
 
// routes defining

router.post("/create-profile",verifyToken.userToken,profileController.createProfile);
router.get("/get-profile-byid" ,verifyToken.profileToken, profileController.findProfile)
router.get("/get-all-profiles" , profileController.findProfileByName)
router.delete("/delete-profile/:id" , profileController.deleteProfile)
router.put("/update-photo",profileController.updatePhoto)
router.get("/get-profile/:id" , profileController.findProfileById)

module.exports = router