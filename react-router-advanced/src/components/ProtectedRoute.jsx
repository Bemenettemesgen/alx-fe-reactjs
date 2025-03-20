import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    // Simulated authentication check
    const isAuthenticated = localStorage.getItem("authToken");

    // If the user is authenticated, render the children components
    return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
