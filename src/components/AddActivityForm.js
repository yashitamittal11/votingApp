import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addActivity } from '../features/activities/activitiesSlice';

const AddActivityForm = () => {
  const [activityName, setActivityName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activityName.trim()) {
      const newActivity = { id: Date.now(), name: activityName, votes: 0 };
      dispatch(addActivity(newActivity));
      setActivityName('');
    }
  };

  return (
    <>
      <h2 className = "add-activity">Add a new activity</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="activityName">Activity Name:</label>
        <input
          type="text"
          id="activityName"
          value={activityName}
          onChange={(e) => setActivityName(e.target.value)}
        />
        <button type="submit">Add Activity</button>
      </form>
    </>
  );
};

export default AddActivityForm;