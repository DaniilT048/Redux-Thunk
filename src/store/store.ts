import {configureStore} from "@reduxjs/toolkit";
import toDoSlice from './toDoSlice.ts'
import themeSlice from "./themeSlice.ts";

export const store = configureStore({
    reducer: {
        todo: toDoSlice,
        theme: themeSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;