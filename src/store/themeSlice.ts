import {createSlice, Slice} from '@reduxjs/toolkit';

interface ThemeSlice {
    theme: 'dark' | 'light';
}

const initialState: ThemeSlice = {
    theme: 'dark',
}

const themeSlice:Slice<ThemeSlice> = createSlice({
    name: 'theme',
    initialState,
    reducers:{
        toggleTheme(state :ThemeSlice){
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;