import { combineReducers, configureStore } from '@reduxjs/toolkit';
import signInSlice from './features/sign-in/signInSlice';

const rootReducer = combineReducers({
    signIn: signInSlice,
})

export const makeStore = () => configureStore({
    reducer: rootReducer,
})

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];