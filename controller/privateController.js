const PrivateAccount = require("../model/PrivateAccount");
// creating private controller

const setPrivate = async (req, res) => {
  try {
    const { profileId } = req.body;
    const saveProfileId = new PrivateAccount({
      profileId,
    });
    // saving the documet in database
    await saveProfileId.save();
    res.status(200).json(saveProfileId);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};

// delete privateAccount controller code

const deletePrivate = async (req, res) => {
  try {
    const id = req.params.id;
    await PrivateAccount.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "profileId has been deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server Error" });
  }
};

module.exports = { setPrivate, deletePrivate };
