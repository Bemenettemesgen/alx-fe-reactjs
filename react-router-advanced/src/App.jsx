import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogPost from "./components/BlogPost"; // Import the BlogPost component

// Configure the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
    children: [
      { path: "details", element: <div>Profile Details</div> },
      { path: "settings", element: <div>Profile Settings</div> },
    ],
  },
  // Add the dynamic route for blog posts
  {
    path: "/blog/:id",
    element: <BlogPost />, // Render the BlogPost component
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;