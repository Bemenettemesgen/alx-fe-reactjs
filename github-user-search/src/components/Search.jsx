import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSearch} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
          {loading ? "Loading" : "Search"}
        </button>
      </form>

      {error && (
        <p className="text-center text-red-500 mt-4">{error}</p>
      )}

      {user && (
        <div className="mt-6 border p-4 rounded flex flex-col items-center shadow">
          <img 
            src={user.avatar_url} 
            alt={`${user.login}'s avatar`} 
            className="w-20 h-20 rounded-full mb-4" 
            ["fetchUserData"]
            "fetchUserData"
          />
          <h2 className="text-xl font-bold">{user.name || user.login}</h2>
          <p>{user.bio || "No bio available"}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline mt-2"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
