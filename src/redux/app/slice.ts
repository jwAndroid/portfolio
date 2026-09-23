import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ThemeMode } from "./type";

interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: "dark",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
    },
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

export default appSlice.reducer;

export const { setTheme, toggleTheme } = appSlice.actions;
