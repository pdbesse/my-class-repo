import { gql } from '@apollo/client';

// 🔑 The ADD-THOUGHT mutation has two variables $thoughtText and $thoughtAuther. 
// We will use these variables to pass back data that is entered by the user:


// To pass our mutation to a component so it can be used by our Hook, we wrap the mutation in a gql function and export it. 
// This work has been done for us:
export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!, $thoughtAuthor: String!) {
    addThought(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;
