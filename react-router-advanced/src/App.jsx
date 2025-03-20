// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component

// Define nested routes for the profile section
const profileRoutes = [
  {
    path: "details",
    element: <div>Profile Details</div>, // Replace with actual component
  },
  {
    path: "settings",
    element: <div>Profile Settings</div>, // Replace with actual component
  },
];

// Configure the router with protected routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute> {/* Wrap protected content with ProtectedRoute */}
        <Profile />
      </ProtectedRoute>
    ),
    children: profileRoutes, // Nested routes under /profile
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;