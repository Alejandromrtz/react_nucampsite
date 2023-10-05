// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  currentUser: null,
};

// Create a user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      return { ...state, currentUser: action.payload };
    },
  },
});

// Export the reducer
export const userReducer = userSlice.reducer;

// Export the setCurrentUser action
export const { setCurrentUser } = userSlice.actions;

// Export the selectCurrentUser selector
export const selectCurrentUser = (state) => state.user.currentUser;