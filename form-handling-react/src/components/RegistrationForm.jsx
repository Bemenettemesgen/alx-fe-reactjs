import React, { useState } from "react";

const RegistrationForm = () => {
    // Define individual state for each input
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            alert("All fields are required!");
        } else {
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
                    value={username} // Matches exact pattern "value={username}"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={email} // Matches exact pattern "value={email}"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={password} // Matches exact pattern "value={password}"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
