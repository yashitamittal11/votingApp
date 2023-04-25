import React from 'react';
import './App.css';
import ActivitiesList from './components/ActivitiesList';
import UserPreference from './components/UserPreference';
import AddActivityForm from './components/AddActivityForm';
import TopActivities from './components/TopActivities';
import ResetPreferences from './components/ResetPreferences';


function App() {
  return (
    <div className="App">
        <ActivitiesList />
        <UserPreference />
        <ResetPreferences />
        <AddActivityForm />
        <TopActivities />
    </div>
  );
}

export default App;