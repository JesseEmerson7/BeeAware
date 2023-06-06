const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    username: String
    email: String
    password: String
    profilePic: String
  }

  type Auth {
    token: ID!
    profile: User
  }

  type Query {
    profiles: [User]!
    profile(id: ID!): User
    me: User
  }

  type Mutation {
    addProfile(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    removeProfile: User
    
  }
`;

module.exports = typeDefs;
