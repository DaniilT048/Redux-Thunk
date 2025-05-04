import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
    loading: false,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(
                getUsersFromServer.pending,
                (state) => {
                    state.loading = true;
                }
            )
            .addCase(
                getUsersFromServer.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.users = action.payload;
                })
    }
})

export const getUsersFromServer = createAsyncThunk(
    'users/getUsersFromServer',
    async () => {
        const users = await fetch(`https://jsonplaceholder.typicode.com/users/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Something went wrong" + response.statusText);
                }
                return response.json();
            });

        return users;
    }
)

export default usersSlice.reducer;