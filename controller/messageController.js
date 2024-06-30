const Message = require("../model/Message");
const Profile = require("../model/Profile");

// creating message controller
const sendMessage = async (req, res) => {
  try {
    const { message, postImage } = req.body;
    // finding profile details
    const profile = await Profile.findById(req.profileId);
    if (!profile) {
      res.status(404).json({ Message: "profile not found" });
    }

    const currentDate = new Date().toLocaleDateString("en-GB")

    // saving in database message details
    const saveMessage = new Message({
      message,
      postImage,
      profileImage: profile.image,
      userName: profile.userName,
      profileId: profile._id,
      date : currentDate
    });

    await saveMessage.save();
    res.status(200).json({ message: "message has sent successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { sendMessage };
