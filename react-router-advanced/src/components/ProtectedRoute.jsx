import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
 const useAuth = () => {
        // Simulate authentication by checking for a token in localStorage
        const token = localStorage.getItem("authToken");
        return !!token; // Returns true if authenticated, false otherwise
    };
    const isAuthenticated = localStorage.getItem("authToken");

    // If the user is authenticated, render the children components
    return isAuthenticated ? children : <Navigate to="/" />;
    export default useAuth;
};
