import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [seeAll, setSeeAll] = useState(false);
  const visibleCount = 3;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    console.log("The Post data is", posts);
  }, [posts]);

  useEffect(() => {
    if (!seeAll) {
      const interval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + visibleCount) % posts.length
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [posts, seeAll]);

  const visiblePosts = posts.slice(currentIndex, currentIndex + visibleCount);
  const handleSeeAll = () => setSeeAll(true);

  return (
    <div className="carousel-wrapper">
      {seeAll ? (
        <div className="grid-view">
          {posts.map((post) => (
            <div key={post.id} className="blog-post">
              <h3>{post.title}</h3>
              <p>{post.body.slice(0, 100)}...</p>
              <Link to={`/post/${post.id}`}>Read More</Link>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="carousel grid-view">
            {visiblePosts.map((post) => (
              <div key={post.id} className="blog-post">
                <h3>{post.title}</h3>
                <p>{post.body.slice(0, 100)}...</p>
                <Link to={`/post/${post.id}`}>Read More</Link>
              </div>
            ))}
          </div>
          <div className="see-all-btn-wrapper">
            <button className="see-all-btn" onClick={handleSeeAll}>
              See All
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogList;
