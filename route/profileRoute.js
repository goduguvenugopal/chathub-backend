const express = require("express");
const router = express.Router();
const profileController = require("../controller/profileController");
const verifyToken = require("../middleware")
 
// routes defining

router.post("/create-profile",verifyToken.userToken,profileController.createProfile);
router.get("/get-all-profiles" , profileController.findAllProfiles)
router.delete("/delete-profile/:id" , profileController.deleteProfile)
router.put("/update-photo",profileController.updatePhoto)
router.get("/get-profile/:id" , profileController.findProfileById)

module.exports = router