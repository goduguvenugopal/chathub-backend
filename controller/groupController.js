const Group = require("../model/Group");

// Create a new group
const createGroup = async (req, res) => {
  const {
    admin,
    groupName,
    adminProfileId,
    profileId1,
    profileId2,
    profileId3,
    profileId4,
    profileId5,
    profileId6,
    profileId7,
    profileId8,
  } = req.body;

  try {
    const newGroup = new Group({
      admin,
      groupName,
      adminProfileId,
      profileId1,
      profileId2,
      profileId3,
      profileId4,
      profileId5,
      profileId6,
      profileId7,
      profileId8,
    });

    await newGroup.save();
    res.status(201).json(savedGroup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all groups
const getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single group by ID
const deleteGroupById = async (req, res) => {
  try {
    const  id = req.params.id;
     await Group.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted group" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {createGroup , getAllGroups, deleteGroupById}