import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ user, children }) => {
    if (!user) {
        return <Navigate to="/" replace />
    }
    return children ? children : (
        <section className="relative">
            <div className="main-width md:pr-4">
                <Outlet />
            </div>
        </section>
    );
}

export default ProtectedRoute