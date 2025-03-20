// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // Replace with actual auth logic (e.g., Redux or Context)
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />; // Redirect to home if not authenticated
  }

  // Render children or nested routes via <Outlet />
  return children || <Outlet />;
};

export default ProtectedRoute;