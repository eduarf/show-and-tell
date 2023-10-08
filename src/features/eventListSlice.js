/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRow: false,
};

const eventListSlice = createSlice({
  name: "eventList",
  initialState,
  reducers: {
    onRow: (state, action) => {
      state.isRow = true;
    },
    offRow: (state, action) => {
      state.isRow = false;
    },
  },
});

export const { onRow, offRow } = eventListSlice.actions;

export default eventListSlice.reducer;
