/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

const aboutDropdownSlice = createSlice({
    name: 'aboutDropdown',
    initialState,
    reducers: {
        onDropdown: (state, action) => {
            state.isOpen = true;
        },
        offDropdown: (state, action) => {
            state.isOpen = false;
        },
    },
});

export const  {onDropdown, offDropdown} = aboutDropdownSlice.actions;

export default aboutDropdownSlice.reducer;