import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProjectEntity } from './type';

interface ProjectState {
  posts: {
    data: ProjectEntity[] | null;
  };
}

const initialState: ProjectState = {
  posts: {
    data: null,
  },
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    fulfilled(state, action: PayloadAction<ProjectEntity[]>) {
      state.posts.data = action.payload;
    },
  },
});

export default projectSlice.reducer;

export const { fulfilled } = projectSlice.actions;
