
import { createSessionClient } from '@/lib/server/appwrite';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getLoggedInUserThunk = createAsyncThunk(
    'logged-in',
    async () => {
        try {
            const { account } = await createSessionClient();
            return await account.get();
        } catch (error) {
            return null;
        }
    }
);


