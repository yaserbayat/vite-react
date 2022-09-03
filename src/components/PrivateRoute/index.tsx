import React from 'react';
import {Navigate, Outlet, useLocation} from "react-router-dom";

const PrivateRoute = () => {
    const isLogin = !!localStorage.accessToken;
    const {pathname, search} = useLocation();

    if (!isLogin) {
        return <Navigate to={`/login?returnUrl=${pathname + search}`} replace />
    } else return (
        <Outlet />
    );
};

export default PrivateRoute;