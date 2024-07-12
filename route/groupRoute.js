const express = require("express");
const router = express.Router();
const groupController = require("../controller/groupController");

router.post("/create-group", groupController.createGroup);
router.get("/get-all-groups", groupController.getAllGroups);
router.delete("/delete-group-byid/:id", groupController.deleteGroupById);

module.exports = router;
