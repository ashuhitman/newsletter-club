import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

type ProtectedRouteProps = {
    children: ReactNode
    isAuthenticated?: boolean
    redirectTo?: string
}

export function ProtectedRoute({
    children,
    isAuthenticated = true,
    redirectTo = '/login',
}: ProtectedRouteProps) {
    const location = useLocation()

    if (!isAuthenticated) {
        return <Navigate to={redirectTo} replace state={{ from: location.pathname }} />
    }

    return <>{children}</>
}
