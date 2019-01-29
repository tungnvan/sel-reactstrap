import React from 'react';
import {Redirect} from 'react-router-dom';
import DashboardRoute from "./dashboard-route/dashboard-route";
import LoginRoute from "./login-route/login-route";

export const APP_ROUTES = [
    {
        path: "/",
        exact: true,
        component: () => (<Redirect to="/login" />),
    }, {
        path: "/dashboard",
        exact: true,
        component: () => (<Redirect to="/dashboard/page-one" />),
    }, {
        path: "/dashboard",
        exact: false,
        component: DashboardRoute,
    }, {
        path: "/login",
        exact: true,
        component: LoginRoute,
    }
];