import { Navigate, Outlet } from "react-router";

import { useAppSelector } from "../app/hooks";

export function ProtectedTeacherLayout() {
    // const {
    //     isAuthenticated,
    //     initialized,
    // } = useAppSelector((state) => state.auth);
    const initialized = true;
    const isAuthenticated = false;

    if (!initialized) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50">
                <div className="text-sm text-slate-500">
                    Loading...
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <Navigate
                to="/login"
                replace
            />
        );
    }

    return <Outlet />;
}