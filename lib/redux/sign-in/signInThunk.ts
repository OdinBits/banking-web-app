
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signInThunk = createAsyncThunk(
    'sign-in/signIn',
    async (param:any) => {
        try {
            // const response = await axios.post('/api/auth/sign-in', { email, password });
            // // Assuming the API returns a boolean indicating success
            // return response.data.success;
        } catch (error:any) {
            console.error(error.response.data);
        }
    }
);
