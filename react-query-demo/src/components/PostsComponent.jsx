import React from "react";
import { useQuery } from "react-query";

// Fetcher function to get posts from the API
const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }
    return response.json();
};

const PostsComponent = () => {
    // Use React Query's `useQuery` with caching options
    const {
        data,
        isError,
        isLoading,
        error,
        refetch,
        isFetching,
    } = useQuery("posts", fetchPosts, {
        cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
        staleTime: 1000 * 60 * 1, // Data remains fresh for 1 minute
        refetchOnWindowFocus: true, // Refetch when the window regains focus
        keepPreviousData: true, // Keep previous data during refetching
    });

    // Handle loading state
    if (isLoading) return <div>Loading...</div>;

    // Handle error state
    if (isError) return <div>Error: {error.message}</div>;

    // Render posts
    return (
        <div>
            <h2>Posts</h2>
            <button onClick={refetch}>
