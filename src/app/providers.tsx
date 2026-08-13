import type { ReactNode } from "react";
import { Provider } from "react-redux";

import { store } from "./store";
import { AuthInitializer } from "../features/auth/AuthInitializer";

interface AppProvidersProps {
    children: ReactNode;
}

export function AppProviders({
    children,
}: AppProvidersProps) {
    return (
        <Provider store={store}>
            <AuthInitializer />

            {children}
        </Provider>
    );
}