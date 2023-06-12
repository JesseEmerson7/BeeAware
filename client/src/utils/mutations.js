import { gql } from "@apollo/client";

// export const ADD_PROFILE = gql`
//   mutation addProfile($name: String!, $email: String!, $password: String!) {
//     addProfile(name: $name, email: $email, password: $password) {
//       token
//       profile {
//         _id
//         name
//       }
//     }
//   }
// `;

// export const ADD_SKILL = gql`
//   mutation addSkill($profileId: ID!, $skill: String!) {
//     addSkill(profileId: $profileId, skill: $skill) {
//       _id
//       name
//       skills
//     }
//   }
// `;

export const CREATE_POST = gql`
mutation createPost($title: String!, $author: String!, $description: String!, $body: String!) {
  createPost(title: $title, author: $author, description: $description, body: $body) {
    _id
    posts {
      _id
    }
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

// export const REMOVE_SKILL = gql`
//   mutation removeSkill($skill: String!) {
//     removeSkill(skill: $skill) {
//       _id
//       name
//       skills
//     }
//   }
// `;
