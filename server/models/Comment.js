const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: String,
    body: String,
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    toJSON: {
      timestamps: true,
    },
  }
);

const Comment = model("comment", commentSchema);

module.exports = Comment;
