const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: String,
    description: {
        type:String,
        required: true,
        maxLength: 150
    },
    body: String,
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "comment",
          },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  }
);

const Post = model("post", postSchema);

module.exports = Post;
