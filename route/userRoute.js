const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const verifyToken = require("../middleware");

// routes defining
router.post("/create-user", userController.createUser);
router.post("/login-user", userController.loginUser);
router.get("/get-user", verifyToken.userToken, userController.getUser);
router.delete("/delete-user/:id" , userController.deleteUser)

module.exports = router;
