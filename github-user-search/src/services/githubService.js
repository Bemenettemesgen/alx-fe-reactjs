// src/services/githubService.js
import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // Returns user data
  } catch (error) {
    throw new Error('User not found or API error');
  }
};

export const fetchAdvancedUsers = async (query) => {
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items; // Returns array of users
  } catch (error) {
    throw new Error('Error fetching users');
  }
};
