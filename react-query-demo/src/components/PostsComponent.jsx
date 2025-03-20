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
    // Use React Query's `useQuery` to fetch posts
    const { data, isError, isLoading, error, refetch } = useQuery("posts", fetchPosts);

    // Handle loading state
    if (isLoading) return <div>Loading...</div>;

    // Handle error state using `isError`
    if (isError) return <div>Error: {error.message}</div>;

    // Render posts
    return (
        <div>
            <h2>Posts</h2>
            <button onClick={refetch}>Refetch Posts</button>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;
