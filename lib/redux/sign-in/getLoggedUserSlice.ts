// lib/features/sign-in/signInSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getLoggedInUserThunk } from './getLoggedUserThunk';

const loggedInTypes = {
    loggedInLoading: false,
    loggedInSuccess: false,
    loggedInError: null as string | null,
};

const getLoggedUserSlice = createSlice({
    name: 'logged-in',
    initialState: loggedInTypes,
    reducers: {
        setLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.loggedInLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getLoggedInUserThunk.pending, (state) => {
                state.loggedInLoading = true;
                state.loggedInSuccess = false;
                state.loggedInError = null;
            })
            .addCase(getLoggedInUserThunk.fulfilled, (state) => {
                state.loggedInLoading = false;
                state.loggedInSuccess = true;
            })
            .addCase(getLoggedInUserThunk.rejected, (state, action) => {
                state.loggedInLoading = false;
                state.loggedInError = action.payload as string;
            });
    }
});

export const { setLoggedIn } = getLoggedUserSlice.actions;
export default getLoggedUserSlice.reducer;
