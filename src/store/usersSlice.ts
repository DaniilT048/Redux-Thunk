import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export type User = {
    id: number;
    name: string;
    phone: string;
    email: string;
    address: {
        city: string;
        street: string;
    };
};

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
                    // @ts-ignore
                    state.users = action.payload;
                })
    }
})

export const getUsersFromServer = createAsyncThunk(
    'users/getUsersFromServer',
    async () => {
        const users: User[] = await fetch(`https://jsonplaceholder.typicode.com/users/`)
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