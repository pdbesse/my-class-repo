//🔑 For our query to execute, it must be contained in a gql function. 
//We import the functionality from apollo/client at the top of the page:
import { gql } from '@apollo/client';

//🔑 We wrap our query in the gql function and add export so we can use our query in our component:
//🔑 We write a query that uses the profile entry point and return values for the _id, name, and skills fields. 
//It is important that these values match a type defined in our GraphQL API schema exactly. 
//Otherwise, the query will not work:
export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;
