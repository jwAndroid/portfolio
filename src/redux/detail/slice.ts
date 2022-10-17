import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProjectEntity } from './type';

interface ContentState {
  posts: {
    data: ProjectEntity | null;
  };
}

const initialState: ContentState = {
  posts: {
    data: null,
  },
};

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    fulfilledDetail(state, action: PayloadAction<ProjectEntity>) {
      state.posts.data = action.payload;
    },
  },
});

export default detailSlice.reducer;

export const { fulfilledDetail } = detailSlice.actions;
