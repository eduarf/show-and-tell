/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const menuDropdownSlice = createSlice({
  name: "menuDropdown",
  initialState,
  reducers: {
    toggleMenuDropdown: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMenuDropdown } = menuDropdownSlice.actions;

export default menuDropdownSlice.reducer;
