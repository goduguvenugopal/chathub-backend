const mongoose = require("mongoose");

// creating chat schema
const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    profileId: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
        required: true,
    },
    postId: {
        type: String,
        required: true
    }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
