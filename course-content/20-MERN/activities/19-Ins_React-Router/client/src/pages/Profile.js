import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import SkillsList from '../components/SkillsList';
import SkillForm from '../components/SkillForm';

import { QUERY_SINGLE_PROFILE } from '../utils/queries';

const Profile = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  // When the user clicks on the link inside our app or enters the page's URL in the browser, we want only the associated tech friend's information to display on the page.
  // 🔑 To do this, we first grab the needed profile id from the URL's parameter using the useParams() Hook:
  const { profileId } = useParams();

  // 🔑 Then, we use that profile id to query our data and return the associated tech friend's information:
  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    // pass URL parameter
    variables: { profileId: profileId },
  });

  const profile = data?.profile || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2 className="card-header">
        {profile.name}'s friends have endorsed these skills...
      </h2>

      {profile.skills?.length > 0 && <SkillsList skills={profile.skills} />}

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <SkillForm profileId={profile._id} />
      </div>
    </div>
  );
};

export default Profile;
