'use server';

import signInSlice from "./features/sign-in/signInSlice";
import signUpSlice from "./features/sign-up/signUpSlice";

import { signInThunk } from "./features/sign-in/signInThunk";
import { signUpThunk } from "./features/sign-up/signUpThunk";

export {
    signInSlice,
    signUpSlice,
}

export {
    signInThunk,
    signUpThunk
}