const Comment = require("../model/Comment");

// comment send controlloer

const sendComment = async (req, res) => {
  try {
    const { comment, date, userName, profileId, profileImage, postId } =
      req.body;
    const saveComment = new Comment({
      comment,
      date,
      userName,
      profileId,
      profileImage,
      postId,
    });
    await saveComment.save();
    res.status(200).json({ Message: "comment has sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "internal server error" });
  }
};

// get all  comments controlloer function

const getAllComments = async (req, res) => {
  try {
    const allComments = await Comment.find();
    res.status(200).json(allComments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "internal server error" });
  }
};

// delete single chat

const deleteComment = async (req, res) => {
  try {
    const id = req.params.id;
    await Comment.findByIdAndDelete(id);
    res.status(200).json({ Message: "comment deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "internal server error" });
  }
};

module.exports = { sendComment, getAllComments, deleteComment };
