import React, { useState } from 'react';
import { fetchAdvancedUsers } from '../services/githubService'; // Import the service

const Search = () => {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const results = await fetchAdvancedUsers(username);
      setUsers(results);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter GitHub username" />
        <button type="submit">Search</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a href={user.html_url} target="_blank">{user.login}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
