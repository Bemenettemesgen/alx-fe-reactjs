import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserCard({ user }) {
  const [details, setDetails] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(true);

  useEffect(() => {
    // Fetch user details
    const fetchDetails = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${user.login}`);
        setDetails(res.data);
      } catch (error) {
        setDetails(null);
      } finally {
        setLoadingDetails(false);
      }
    };
    fetchDetails();
  }, [user.login]);

  return (
    <div className="p-4 border rounded flex gap-4 items-center transition-transform transform hover:scale-105">
      <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
      <div>
        <h3 className="text-xl font-bold">
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            {user.login}
          </a>
        </h3>
        {loadingDetails ? (
          <p>Loading details...</p>
        ) : details ? (
          <>
            {details.location && <p>Location: {details.location}</p>}
            <p>Public Repos: {details.public_repos}</p>
          </>
        ) : (
          <p>Unable to load details.</p>
        )}
      </div>
    </div>
  );
}

export default UserCard;
