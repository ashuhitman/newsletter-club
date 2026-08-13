import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthUser {
    $id: string;
    name: string;
    email: string;
}

interface AuthState {
    user: AuthUser | null;
    isAuthenticated: boolean;
    initialized: boolean;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    initialized: false,
};

const authSlice = createSlice({
    name: "auth",

    initialState,

    reducers: {
        setUser: (
            state,
            action: PayloadAction<AuthUser>,
        ) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },

        clearUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },

        setInitialized: (state) => {
            state.initialized = true;
        },
    },
});

export const {
    setUser,
    clearUser,
    setInitialized,
} = authSlice.actions;

export default authSlice.reducer;