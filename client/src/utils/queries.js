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



// export const QUERY_ME = gql`
//   query  {
//     me {
//       _id
//       username
//       email
      
//     }
//   }
// `;








// export const QUERY_PROFILES = gql`
//   query allProfiles {
//     profiles {
//       _id
//       name
//       skills
//     }
//   }
// `;

// export const QUERY_SINGLE_PROFILE = gql`
//   query singleProfile($profileId: ID!) {
//     profile(profileId: $profileId) {
//       _id
//       name
//       skills
//     }
//   }
// `;

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       name
//       skills
//     }
//   }
// `;
