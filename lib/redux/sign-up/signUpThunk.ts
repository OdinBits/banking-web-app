// lib/features/sign-in/signInThunks.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAdminClient } from '@/lib/server/appwrite';
import { ID } from 'node-appwrite';
import { cookies } from 'next/headers';
import { parseStringify } from '@/lib/utils';

export const signUpThunk = createAsyncThunk(
    'sign-up',
    async (userData: SignUpParams) => {

        const { email, password, firstName, lastName } = userData;

        try {
            const { account } = await createAdminClient();

            const newUserAccount = await account.create(
                ID.unique(),
                email,
                password,
                `${firstName} ${lastName}`
            );
            const session = await account.createEmailPasswordSession(email, password);

            cookies().set("appwrite-session", session.secret, {
                path: "/",
                httpOnly: true,
                sameSite: "strict",
                secure: true,
            });

            return parseStringify(newUserAccount)
        } catch (error: any) {
            console.error(error)
        }
    }
);
