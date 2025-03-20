import React, { useState } from "react";

const RegistrationForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({}); // State to track errors

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};

        // Validate each field
        if (!username) validationErrors.username = "Username is required.";
        if (!email) validationErrors.email = "Email is required.";
        if (!password) validationErrors.password = "Password is required.";

        setErrors(validationErrors); // Update the errors state

        // If no validation errors, proceed with form submission
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted successfully:", { username, email, password });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
            <br />
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
            <br />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
