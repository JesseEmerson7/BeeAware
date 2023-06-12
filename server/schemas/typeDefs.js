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
    title: String
    author: String
    description: String
    body: String
    comments: [Comment]
    createdAt: Int
  }

  type Comment {
    title: String
    author: String
    body: String
    likes: Int
    createdAt: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(id: ID!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    removeUser: User
  }
`;

module.exports = typeDefs;
