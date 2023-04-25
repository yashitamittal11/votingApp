import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const TopActivities = () => {
  const activities = useSelector((state) => state.activities);
  const [topActivities, setTopActivities] = useState([]);


  useEffect(() => {
    const updateTopActivities = () => {
      const newTopActivities = activities
        .slice()
        .sort((a, b) => b.votes - a.votes)
        .slice(0, 3);
      setTopActivities(newTopActivities);
    };

    updateTopActivities();
  }, [ activities ]);

  return (
    <div className= "top-activity">
      <h2>Top 3 Activities:</h2>
      <ul>
        {topActivities.map((activity) => (
          <li key={activity.id}>
            {activity.name} ({activity.votes} votes)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopActivities;