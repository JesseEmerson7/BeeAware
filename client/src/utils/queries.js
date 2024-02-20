import { gql } from "@apollo/client";

export const QUERY_USER_PROFILE = gql`
  query user {
    user {
      _id
      username
      profilePic
      bio
      email
      posts {
        _id
        createdAt
        title
      }
    }
  }
`;
export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID) {
    getSinglePost(postId: $postId) {
      _id
      title
      description
      author
      authorName
      body
      createdAt
      comments {
        _id
        author
        body
        likes
        createdAt
      }
    }
  }
`;

export const QUERY_ALL_POSTS = gql`
  query allPosts {
    allPosts {
      _id
      title
      author
      description
      authorName
      img
      body
      createdAt
    }
  }
`;
