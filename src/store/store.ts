import {configureStore} from "@reduxjs/toolkit";
import toDoSlice from './toDoSlice.ts'
import themeSlice from "./themeSlice.ts";
import usersSlice from "./usersSlice.ts";

export const store = configureStore({
    reducer: {
        users: usersSlice,
        todo: toDoSlice,
        theme: themeSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;