import React from 'react';
import { useSelector } from 'react-redux';

const UserPreference = () => {
  const userPreference = useSelector((state) => state.preferences);
  const activities = useSelector((state) => state.activities);

  const preferredActivity = activities.find(
    (activity) => activity.id === userPreference
  );

  return (
    <div className = "preference">
      <h2>Your Preferred Activity:</h2>
      {preferredActivity ? (
        <p>You have chosen: {preferredActivity.name}</p>
      ) : (
        <p>You have not chosen a preferred activity yet.</p>
      )}
    </div>
  );
};

export default UserPreference;