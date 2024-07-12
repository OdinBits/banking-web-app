// lib/features/sign-in/signInSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signUpThunk } from './signUpThunk';

const signUpTypes = {
    signInLoading: false,
    signInSuccess: false,
    signInError: null as string | null,
};

const signUpSlice = createSlice({
    name: 'sign-in',
    initialState: signUpTypes,
    reducers: {
        setSignIn: (state, action: PayloadAction<boolean>) => {
            state.signInLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUpThunk.pending, (state) => {
                state.signInLoading = true;
                state.signInSuccess = false;
                state.signInError = null;
            })
            .addCase(signUpThunk.fulfilled, (state) => {
                state.signInLoading = false;
                state.signInSuccess = true;
            })
            .addCase(signUpThunk.rejected, (state, action) => {
                state.signInLoading = false;
                state.signInError = action.payload as string;
            });
    }
});

export const { setSignIn } = signUpSlice.actions;
export default signUpSlice.reducer;
