import { gql } from '@apollo/client';

export const QUERY_USER_PROFILE = gql`
query User {
  user {
    _id
    username
    profilePic
    email
    posts {
      _id
      createdAt
      title
    }
  }
}
`
export const QUERY_SINGLE_POST = gql`
query getSinglePost($postId: ID) {
  getSinglePost(postId: $postId) {
    _id
    title
    description
    author
    body
    createdAt
  }
}
`

export const QUERY_ALL_POSTS = gql`
query allPosts {
  allPosts {
    _id
    title
    author
    description
    createdAt
  }
}
`