// lib/features/sign-in/signInThunks.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import axios from 'axios';

export const signInThunk = createAsyncThunk<
    boolean,
    { email: string, password: string },
    { state: RootState }
>(
    'sign-in/signIn',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/auth/sign-in', { email, password });
            // Assuming the API returns a boolean indicating success
            return response.data.success;
        } catch (error:any) {
            return rejectWithValue(error.response.data);
        }
    }
);
