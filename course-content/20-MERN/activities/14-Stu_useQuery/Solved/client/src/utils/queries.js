import { gql } from '@apollo/client';

// The app is running and ready to make requests. Let's create a new query.
//🔑 We start by using the entry point thoughts and add the fields we want to access. 
//It is important to refer to the schema so that the names match a defined type exactly:

//🔑 We then wrap our completed query in a gql function and export it:
export const QUERY_THOUGHTS = gql`
  # create a GraphQL query to be executed by Apollo Client
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;
