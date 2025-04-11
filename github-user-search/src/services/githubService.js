import axios from 'axios';

// Basic API request: fetch a single user's data by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found or API error");
  }
};

// Advanced API integration: fetch users with advanced query filters
export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  // Start with the username as the base query
  let query = username || '';

  // If a location is provided, append it to the query
  if (location && location.trim().length > 0) {
    query += `+location:${location}`;
  }

  // If a minimum repos count is provided, append it as a filter
  if (minRepos && Number(minRepos) > 0) {
    query += `+repos:>=${minRepos}`;
  }

  // Build the full URL using GitHub's advanced search endpoint
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  try {
    const response = await axios.get(url);
    return response.data.items; // Return an array of user items
  } catch (error) {
    throw new Error("Error fetching advanced user data");
  }
};
