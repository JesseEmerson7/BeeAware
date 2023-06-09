import React from "react";
import "./Blog.css";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Testing Blog Post 1",
      content: "This is ta test text for Blog Post 1",
      upvotes: 10,
      downvotes: 2,
    },
    {
      id: 2,
      title: "Testing Blog Post 2",
      content: "This is a test text for Blog Post 2",
      upvotes: 5,
      downvotes: 1,
    },
  ];

  const handleUpvote = (id) => {
    console.log(`Upvoted blog post with ID: ${id}`);
  };

  const handleDownvote = (id) => {
    console.log(`Downvoted blog post with ID: ${id}`);
  };

  return (
    <div className="blog-container">
      <h1>Welcome to the Blog</h1>
      {blogPosts.map((post) => (
        <div className="blog-card" key={post.id}>
          <h2 className="blog-title">{post.title}</h2>
          <p className="blog-content">{post.content}</p>
          <div className="vote-container">
            <div className="vote-count">{post.upvotes}</div>
            <button
              className="vote-button upvote"
              onClick={() => handleUpvote(post.id)}
            >
              Upvote
            </button>
            <div className="vote-count">{post.downvotes}</div>
            <button
              className="vote-button downvote"
              onClick={() => handleDownvote(post.id)}
            >
              Downvote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
