const express = require("express");
const router = express.Router();
const privateController = require("../controller/privateController");

router.post("/set-private", privateController.setPrivate);
router.delete("/delete-private/:id", privateController.deletePrivate);
router.get("/get-all-accounts", privateController.getAllAccounts);

module.exports = router;
