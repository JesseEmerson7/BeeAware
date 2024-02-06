import { gql } from "@apollo/client";

export const CREATE_POST = gql`
mutation createPost($title: String!, $author: String!, $description: String!, $body: String!, $authorName: String!) {
  createPost(title: $title, author: $author, description: $description, body: $body, authorName: $authorName) {
    _id
  }
}
`;

export const UPDATE_POST = gql`
mutation updatePost($postId: ID!, $title: String!, $description: String!, $body: String!) {
  updatePost(postId: $postId, title: $title, description: $description, body: $body) {
    _id
    title
    author
    description
    body
    createdAt
  }
}
`

export const DELETE_POST = gql`
mutation deletePost($postId: ID) {
  deletePost(postId: $postId) {
    _id
    username
    posts {
      _id
      title
    }
  }
}
`

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        email
        profilePic
        username
      }
      token
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`mutation updateUser($bio: String, $profilePic: String) {
  updateUser(bio: $bio, profilePic: $profilePic) {
    bio
    profilePic
  }
}`

export const ADD_COMMENT_TO_POST = gql`mutation Mutation($postId: ID, $author: String!, $body: String!, $likes: Int) {
  addCommentToPost(postId: $postId, author: $author, body: $body, Likes: $likes) {
    _id
    title
    author
    comments {
      author
      body
      likes
      createdAt
    }
  }
}`
