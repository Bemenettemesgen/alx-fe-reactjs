import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Extract the `id` parameter from the URL
  return <div>Displaying Blog Post with ID: {id}</div>;
};

export default BlogPost;