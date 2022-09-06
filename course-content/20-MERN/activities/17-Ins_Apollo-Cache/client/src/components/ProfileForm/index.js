import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_PROFILE } from '../../utils/mutations';
import { QUERY_PROFILES } from '../../utils/queries';

const ProfileForm = () => {
  const [name, setName] = useState('');

  // When we execute the useMutation Hook, the data in our back-end database is updated and an object is returned. In some cases -- like when we create or delete data -- the cache may not update automatically:
  // In those cases, we add an update function as the second argument of our useMutation Hook:

  const [addProfile, { error }] = useMutation(ADD_PROFILE, {
    // The update method allows us to access and update the local cache
    // We add two arguments to the update function: the cache object that represents the Apollo Client cache and a data property. 
    //The data property is set to hold the data returned from the mutation function:
    update(cache, { data: { addProfile } }) {
      try {
        // First we retrieve existing profile data that is stored in the cache under the `QUERY_PROFILES` query
        // Could potentially not exist yet, so wrap in a try/catch

        // 🔑  We then use the web API function .readQuery() to retrieve the existing list of profiles in the cache:
        const { profiles } = cache.readQuery({ query: QUERY_PROFILES });

        // Then we update the cache by combining existing profile data with the newly created data returned from the mutation
        
        //  🔑 We use .writeQuery() to update the data on the cache and keep the cache in sync with our back end:
        cache.writeQuery({
          query: QUERY_PROFILES,
          // If we want new data to show up before or after existing data, adjust the order of this array
          // Next, we combine the data from the newly executed mutation function with the data we retrieved from the cache and store the results in our data property:
          data: { profiles: [...profiles, addProfile] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = addProfile({
        variables: { name },
      });

      setName('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Add yourself to the list...</h3>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
            placeholder="Add your profile name..."
            value={name}
            className="form-input w-100"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
            Add Profile
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfileForm;
