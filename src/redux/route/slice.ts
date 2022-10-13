import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRoute, RouteState } from './type';

const initialState: RouteState = {
  routeName: '',
};

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    changeRoute(state, action: PayloadAction<IRoute>) {
      state.routeName = action.payload.routeName;
    },
    reset(state) {
      state.routeName = '';
    },
  },
});

export default routeSlice.reducer;

export const { changeRoute, reset } = routeSlice.actions;
