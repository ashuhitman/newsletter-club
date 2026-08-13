import { useEffect } from "react";

import {
    getCurrentUser,
} from "../../services/authService";

import {
    useAppDispatch,
} from "../../app/hooks";

import {
    setInitialized,
    setUser,
} from "./authSlice";

export function AuthInitializer() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        let mounted = true;

        async function initializeAuth() {
            try {
                const user = await getCurrentUser();

                if (mounted) {
                    dispatch(setUser(user));
                }
            } catch {
                // No active Appwrite session.
            } finally {
                if (mounted) {
                    dispatch(setInitialized());
                }
            }
        }

        initializeAuth();

        return () => {
            mounted = false;
        };
    }, [dispatch]);

    return null;
}