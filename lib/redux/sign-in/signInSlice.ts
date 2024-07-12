
// lib/features/sign-in/signInSlice.ts


import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signInThunk } from './signInThunk';

const signInTypes = {
    signInLoading: false,
    signInSuccess: false,
    signInError: null as string | null,
};

const signInSlice = createSlice({
    name: 'sign-in',
    initialState: signInTypes,
    reducers: {
        setSignIn: (state, action: PayloadAction<boolean>) => {
            state.signInLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signInThunk.pending, (state) => {
                state.signInLoading = true;
                state.signInSuccess = false;
                state.signInError = null;
            })
            .addCase(signInThunk.fulfilled, (state) => {
                state.signInLoading = false;
                state.signInSuccess = true;
            })
            .addCase(signInThunk.rejected, (state, action) => {
                state.signInLoading = false;
                state.signInError = action.payload as string;
            });
    }
});

export const { setSignIn } = signInSlice.actions;
export default signInSlice.reducer;
