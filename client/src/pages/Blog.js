import React, { useState } from "react";
import "./Blog.css";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_POSTS } from "../utils/queries";
import { Link } from "react-router-dom";

const Blog = () => {
  const handleBlogClick = (event) => {
    console.log(event.target.id);
  };

  const { loading, data } = useQuery(QUERY_ALL_POSTS);

  if (loading && !data) {
    return <div>Loading...</div>;
  }

  console.log(data.allPosts);
  const mapList = data?.allPosts;
  // map over post list and create blog list
  const mapPostList = mapList.map((post) => {
    return (
      <Link
        className="w-full bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 mt-10 text-center hover:cursor-pointer"
        id={post._id}
        to={`/post/${post._id}`}
      >
        <h2 className=" font-bold text-lg">{post.title}</h2>
        <div className=" border-t mt-2 border-black">
          <p>{post.description}</p>
          <p>By: {post.author}</p>
        </div>
      </Link>
    );
  });

  return (
    <>
      <div className="flex flex-col justify-center">{mapPostList}</div>
    </>
  );
};

export default Blog;
