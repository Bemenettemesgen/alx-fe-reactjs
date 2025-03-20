import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useAuth();

    // If the user is authenticated, render the child components
    return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
