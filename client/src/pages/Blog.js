import React, { useState } from "react";
import "./Blog.css";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([
    // Existing blog posts
  ]);

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    username: "",
  });

  const [selectedTopic, setSelectedTopic] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNewPost = () => {
    if (newPost.title && newPost.content && newPost.username) {
      const id = blogPosts.length + 1;
      const upvotes = 0;
      const downvotes = 0;
      const createdAt = new Date();
      const post = {
        id,
        ...newPost,
        upvotes,
        downvotes,
        createdAt,
      };
      setBlogPosts((prevState) => [...prevState, post]);
      setNewPost({
        title: "",
        content: "",
        username: "",
      });
    }
  };

  const handleUpvote = (id) => {
    setBlogPosts((prevState) =>
      prevState.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            upvotes: post.upvotes + 1,
          };
        }
        return post;
      })
    );
  };

  const handleDownvote = (id) => {
    setBlogPosts((prevState) =>
      prevState.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            downvotes: post.downvotes + 1,
          };
        }
        return post;
      })
    );
  };

  const rankedBlogPosts = [...blogPosts].sort(
    (a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
  );

  const handleTopicChange = (e) => {
    const selectedTopic = e.target.value;
    setSelectedTopic(selectedTopic);
  };

  return (
    <div className="blog-container">
      <h1 className="blog-heading">Let's Buzz about it</h1>

      <div className="blog-card create-post-card">
        <h2 className="blog-title">Create a New Blog Post</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newPost.title}
          onChange={handleInputChange}
          className="create-post-input"
        />
        <textarea
          name="content"
          placeholder="Content"
          value={newPost.content}
          onChange={handleInputChange}
          className="create-post-input"
        ></textarea>
        <input
          type="text"
          name="username"
          placeholder="Your Username"
          value={newPost.username}
          onChange={handleInputChange}
          className="create-post-input"
        />
        <button className="submit-button" onClick={handleNewPost}>
          Submit
        </button>
      </div>

      <div className="select-by-topic">
        <h2 className="select-by-topic-title">Filter by Topic</h2>
        <select
          name="topic"
          value={selectedTopic}
          onChange={handleTopicChange}
          className="select-topic-dropdown"
        >
          <option value="">All Topics</option>
          <option value="technology">Bees</option>
          <option value="science">Honey</option>
          <option value="travel">Polen</option>
          {/* To be updated as necessary */}
        </select>
      </div>

      <div className="blog-card-container">
        {rankedBlogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <h2 className="blog-title">{post.title}</h2>
            <p className="blog-content">{post.content}</p>
            <p className="blog-date">
              Created at: {post.createdAt.toLocaleString()}
            </p>
            <div className="vote-container">
              <div className="vote-count">
                {post.upvotes - post.downvotes}
              </div>
              <button
                className="vote-button upvote"
                onClick={() => handleUpvote(post.id)}
              >
                <span className="arrow">&#8593;</span>
              </button>
              <button
                className="vote-button downvote"
                onClick={() => handleDownvote(post.id)}
              >
                <span className="arrow">&#8595;</span>
              </button>
              <button className="share-button">Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
