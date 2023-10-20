import { configureStore } from "@reduxjs/toolkit";
import aboutDropdownReducer from './src/features/aboutDropdownSlice';
import menuDropdownReducer from './src/features/menuDropdownSlice';
import eventListreducer from './src/features/eventListSlice';
import themeReducer from './src/features/themeSlice';


export const store = configureStore({
    reducer: {
        aboutDropdown: aboutDropdownReducer,
        menuDropdown: menuDropdownReducer,
        eventList: eventListreducer,
        theme: themeReducer,
    },
});