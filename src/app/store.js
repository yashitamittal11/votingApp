import { configureStore } from '@reduxjs/toolkit';
import activitiesReducer from '../features/activities/activitiesSlice';
import preferencesReducer from '../features/activities/preferencesSlice';

const store = configureStore({
  reducer: {
    activities: activitiesReducer,
    preferences: preferencesReducer,
  },
});

export default store;