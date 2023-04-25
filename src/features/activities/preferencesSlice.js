import { createSlice } from '@reduxjs/toolkit';

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: null,
  reducers: {
    setPreference: (state, action) => {
      return action.payload;
    },
    resetPreference: (state, action) => {
        return null;
    },
  },
});

export const { setPreference, resetPreference } = preferencesSlice.actions;

export default preferencesSlice.reducer;