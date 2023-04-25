import React from 'react';
import { useDispatch } from 'react-redux';
import { resetPreference } from '../features/activities/preferencesSlice';

const ResetPreferences = () => {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(resetPreference());
  };

  return (
    <div className = "reset-button">
      <button onClick={handleResetClick}>Reset Preferences</button>
    </div>
  );
};

export default ResetPreferences;