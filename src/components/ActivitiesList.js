import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Activity from './Activity';

/** Use a useEffect hook to fetch the activities data from the database using an HTTP request. */

const ActivitiesList = () => {
    const activities = useSelector( ( state ) => state.activities );
    const userPreference = useSelector( ( state ) => state.preferences );
    const dispatch = useDispatch();
  
    useEffect(() => {
      
          // Fetch the activities from the local storage
    
    }, [dispatch]);
  
    return (
      <div className = "activities-list">
        <h1>Activities</h1>
        <ul>
          { activities.map( ( activity ) => (
            <Activity key = { activity.id } activity = { activity }/>
          ) ) }
        </ul>
        <p>
          { userPreference
            ? `You have voted for activity with ID: ${userPreference}`
            : 'You have not voted for any activity yet.'}
        </p>
      </div>
    );
  };
  
  export default ActivitiesList;
  