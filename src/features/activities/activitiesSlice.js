import { createSlice } from '@reduxjs/toolkit';

const activitiesSlice = createSlice({
  name: 'activities',
  initialState: [ {
    id: 1,
    name: 'Swimming',
    votes: 0,
  } ],
  reducers: {
    addActivity: (state, action) => {
      state.push(action.payload);
    },
    placeVote: (state, action) => {
      const activityId  = action.payload;
      const activityIndex = state.findIndex(activity => activity.id === activityId);
      if (activityIndex !== -1) state[activityIndex].votes += 1;
    },
  },
});

export const { addActivity, placeVote } = activitiesSlice.actions;

export default activitiesSlice.reducer;