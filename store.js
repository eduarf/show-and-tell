import { configureStore } from "@reduxjs/toolkit";
import aboutDropdownReducer from './src/features/aboutDropdownSlice';


export const store = configureStore({
    reducer: {
        aboutDropdown: aboutDropdownReducer,
    },
});