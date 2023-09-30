import { configureStore } from "@reduxjs/toolkit";
import aboutDropdownReducer from './src/features/aboutDropdownSlice';
import menuDropdownReducer from './src/features/menuDropdownSlice';


export const store = configureStore({
    reducer: {
        aboutDropdown: aboutDropdownReducer,
        menuDropdown: menuDropdownReducer,
    },
});