import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CardEntity } from './type';

interface CardState {
  posts: {
    data: CardEntity[] | null;
  };
}

const initialState: CardState = {
  posts: {
    data: null,
  },
};

// TODO: 객체 수정

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    fulfilledCard(state, action: PayloadAction<CardEntity[]>) {
      state.posts.data = action.payload;
    },
  },
});

export default cardSlice.reducer;

export const { fulfilledCard } = cardSlice.actions;
