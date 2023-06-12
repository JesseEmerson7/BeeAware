const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
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
      const post = await Post.findOne({ _id: args.postId });
      return post;
    },
    allPosts: async (parent,args,context)=>{
      const allPosts = Post.find();
      return allPosts;
    }
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

    // Set up mutation so a logged in user can only remove their profile and no one else's
    // removeUser: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOneAndDelete({ _id: context.user._id });
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
    createPost: async (parent, args, context) => {
      if (context.user) {
        const newPost = await Post.create({
          title: args.title,
          author: args.author,
          description: args.description,
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
    updatePost: async (parent,args,context) =>{
      if(context.user){
        const updatedPost = await Post.findOneAndUpdate({
          _id: args.postId
        },
        {
          $set:{
            title: args.title,
            description: args.description,
            body: args.body
          }
        },
        { new: true }
        );

        return updatedPost;
      }
    }
  },
};

module.exports = resolvers;
