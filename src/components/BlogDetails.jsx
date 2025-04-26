import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return post ? (
    <div>
      <Link to="/" className="back-link">
        ← Back to posts
      </Link>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default BlogDetails;
