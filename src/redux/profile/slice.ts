import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProfileEntity } from './type';

interface ProfileState {
  posts: {
    data: ProfileEntity | null;
  };
}

const initialState: ProfileState = {
  posts: {
    data: null,
  },
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    fulfilledProfile(state, action: PayloadAction<ProfileEntity>) {
      state.posts.data = action.payload;
    },
  },
});

export default profileSlice.reducer;

export const { fulfilledProfile } = profileSlice.actions;
