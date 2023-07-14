import React, { useState } from "react";
import "./Blog.css";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_POSTS } from "../utils/queries";
import { Link } from "react-router-dom";
import profileImg from "../assets/img/HoneyBee_Img.jpg";

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
        className=" w-11/12 p-4 bg-yellow-100 hover:bg-yellow-200 hover:border-y-amber-400  border border-gray-200 rounded-lg md:rounded-full shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 mt-10 text-center hover:cursor-pointer flex flex-col md:flex-row justify-between items-center"
        id={post._id}
        to={`/post/${post._id}`}
      >
        <img src={profileImg} className=" w-48 rounded-full" />
        <div className="py-4 md:py-0 md:pl-4">
          <h2 className=" font-bold text-lg">{post.title}</h2>
          <h2>
            <p>By: {post.author}</p>
          </h2>
        </div>
        <p className="w-1/3 overflow-hidden">{post.description}</p>
        {/* date here */}
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
          <div className="flex flex-col justify-center items-center">
            {mapPostList}
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
