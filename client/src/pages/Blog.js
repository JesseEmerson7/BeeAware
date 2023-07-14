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
        className=" w-11/12 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 mt-10 text-center hover:cursor-pointer"
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
      <header
        id="blog-header"
        className="w-full h-56 text-center flex flex-col justify-center items-center"
      >
        <div id="blog-text" className="py-3 px-5">
          <h1 className=" text-6xl">Welcome</h1>
          <h2 className=" text-4xl">to the Bee Blog</h2>
        </div>
      </header>
      {/* Blog feed section */}
      <div id="blog-feed-bg" className="px-0 md:px-9">
      <section className="bg-white">
        <h3 className="text-center pt-5 text-xl font-semibold">Feed</h3>
      <div className="flex flex-col justify-center items-center">{mapPostList}</div>
      </section>
      </div>
      
      
    </>
  );
};

export default Blog;
