'use server';

import signInSlice from "./redux/sign-in/signInSlice";
import { signInThunk } from "./redux/sign-in/signInThunk";
import signUpSlice from "./redux/sign-up/signUpSlice";
import { signUpThunk } from "./redux/sign-up/signUpThunk";

export {
    signInSlice,
    signUpSlice,
}

export {
    signInThunk,
    signUpThunk
}