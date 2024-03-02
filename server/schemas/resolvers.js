const { AuthenticationError } = require("apollo-server-express");
const { User, Post, Comment } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id })
          .populate("posts")
          .populate("comments");
        return user;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    getSinglePost: async (parent, args, context) => {
      const post = await Post.findOne({ _id: args.postId }).populate(
        "comments"
      );
      return post;
    },
    allPosts: async (parent, args, context) => {
      const allPosts = Post.find();
      return allPosts;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    createPost: async (parent, args, context) => {
      if (context.user) {
        const newPost = await Post.create({
          title: args.title,
          author: args.author,
          description: args.description,
          authorName: args.authorName,
          body: args.body,
        });
        const updatedUser = User.findOneAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $addToSet: { posts: newPost._id },
          },
          { new: true }
        ).populate("posts");

        return updatedUser;
      }
      throw new AuthenticationError("You must be logged in");
    },
    deletePost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.findOneAndDelete({ _id: args.postId });
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: { posts: args.postId },
          },
          { new: true }
        ).populate("posts");
        return updatedUser;
      }
      throw new AuthenticationError("You must be logged in");
    },
    updatePost: async (parent, args, context) => {
      if (context.user) {
        const updatedPost = await Post.findOneAndUpdate(
          {
            _id: args.postId,
          },
          {
            $set: {
              title: args.title,
              description: args.description,
              body: args.body,
            },
          },
          { new: true }
        );

        return updatedPost;
      }
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $set: {
              bio: args.bio,
              profilePic: args.profilePic,
            },
          },
          { new: true }
        );
        return updatedUser;
      }
    },
    //toDO! --- Create comment feature ---
    //creating comments and adding ID to post array of comments. may need to make a query of comments and a mutation to update and delete comments. possibly use a populate of comments when querying a post.

    addCommentToPost: async (
      parent,
      { postId, author, body, likes = 0 },
      context
    ) => {
      // if (context.user) {
      try {
        const {username} = await User.findById(author).select("username");
        const comment = await Comment.create({
          author: username,
          authorId: author,
          body: body,
          likes: likes,
        });
        const updatedPost = await Post.findOneAndUpdate(
          { _id: postId },
          {
            $push: {
              comments: comment._id,
            },
          },
          { new: true }
        );
        return updatedPost;
      } catch (error) {
        console.log(error);
        return error.message;
      }
    },
  },
};
// };

module.exports = resolvers;
