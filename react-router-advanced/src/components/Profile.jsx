import React from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
            <nav>
                <Link to="details">Profile Details</Link>
                <Link to="settings">Profile Settings</Link>
            </nav>
            <Routes>
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
            </Routes>
            <Outlet />
        </div>
    );
};

export default Profile;
