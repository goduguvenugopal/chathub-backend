const express = require("express");
const router = express.Router();
const userRoute = require("../controller/userController");
const verifyToken = require("../middleware");

// routes defining
router.post("/create-user", userRoute.createUser);
router.post("/login-user", userRoute.loginUser);
router.get("/get-user", verifyToken.userToken, userRoute.getUser);
router.delete("/delete-user/:id" , userRoute.deleteUser)

module.exports = router;
