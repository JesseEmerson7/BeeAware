const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    author: String,
    body: String,
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = model("comment", commentSchema);

module.exports = Comment;
