import { gql } from '@apollo/client';
// Setting up a mutation is a lot like setting up a query. First, we set up our front end to send requests using Apollo Client.
// 🔑 Then, we write our mutation, making sure our entry point and fields match definitions in our schema exactly and that our variable definition is set. 
//We also define a variable $name. This variable will be used to pass back data when our mutation executes:


export const ADD_PROFILE = gql`
  mutation addProfile($name: String!) {
    addProfile(name: $name) {
      _id
      name
      skills
    }
  }
`;
