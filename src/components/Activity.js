import React from 'react';
import { useDispatch } from 'react-redux';
import { setPreference } from '../features/activities/preferencesSlice';
import { placeVote } from '../features/activities/activitiesSlice';

const Activity = ({ activity }) => {
  const dispatch = useDispatch();

  const handleVoteClick = () => {
    dispatch(setPreference(activity.id));
    dispatch(placeVote(activity.id));
  };

  return (
    <li>
      {activity.name}{' '}
      <button onClick={handleVoteClick}>Vote for this activity</button>
    </li>
  );
};

export default Activity;