import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/profile" element={<Profile />}>
                    <Route path="details" element={<ProfileDetails />} />
                    <Route path="settings" element={<ProfileSettings />} />
                </Route>
                <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
        </Router>
    );
};

export default App;
