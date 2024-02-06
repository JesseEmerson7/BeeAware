const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    profilePic: String
    bio: String
    posts: [Post]
    comments: [Comment]
  }

  type Post {
    _id: ID
    title: String
    author: String
    description: String
    authorName:String
    img:String
    body: String
    comments: [Comment]
    createdAt: String
  }

  type Comment {
    _id: ID
    author: String
    body: String
    likes: Int
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user: User
    getSinglePost(postId:ID):Post
    allPosts:[Post]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createPost(title:String!, author:String!, description:String!, authorName:String!, body:String! ): User
    removeUser: User
    deletePost(postId:ID): User
    updatePost(postId:ID! ,title:String!, description:String!, body:String!):Post
    updateUser(bio:String, profilePic:String ): User
    addCommentToPost(postId:ID, author:String!, body:String!, Likes:Int) : Post
  }
`;

module.exports = typeDefs;
