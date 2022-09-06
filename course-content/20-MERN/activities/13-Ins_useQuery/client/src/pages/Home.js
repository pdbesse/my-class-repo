import React from 'react';
import ProfileList from '../components/ProfileList';
//🔑 We import the useQuery Hook from apollo/client to return our data:
import { useQuery } from '@apollo/client';
// We import the query into the component where we want our data to be displayed:
import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
  //We use the useQuery Hook to execute the query when the page renders. 
  //The returned object will contain both loading and data properties:
  const { loading, data } = useQuery(QUERY_PROFILES);
  //We can then store the returned data in a variable so we can display the information on our page:
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  //The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProfileList
              profiles={profiles}
              title="Here's the current roster of friends..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
