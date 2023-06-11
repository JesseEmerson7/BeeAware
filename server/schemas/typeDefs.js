const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    profilePic: String
    posts: [Post]
    comments: [Comment]
  }

  type Post {
    _id: ID
    title: String
    author: String
    description: String
    body: String
    comments: [Comment]
    createdAt: String
  }

  type Comment {
    title: String
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
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createPost(title:String!, author:String!, description:String!, body:String! ): User
    removeUser: User
  
  }
`;

module.exports = typeDefs;
