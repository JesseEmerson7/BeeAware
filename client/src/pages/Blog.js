import React, { useState } from "react";
import "./Blog.css";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_POSTS } from "../utils/queries";
import { Link } from "react-router-dom";
import profileImg from "../assets/img/HoneyBee_Img.jpg";

const Blog = () => {
  //date formatting logic for post list
  const time = new Intl.DateTimeFormat("en-us",{
    dateStyle: "short"
  });

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
        className=" w-11/12 p-4 bg-yellow-100 hover:bg-yellow-200 hover:border-y-amber-400 transition-all duration-300  border border-gray-200 rounded-lg md:rounded-full shadow-lg sm:p-6 dark:bg-gray-800 dark:border-gray-700 mt-10 text-center hover:cursor-pointer flex flex-col md:flex-row justify-start items-center hover:shadow-2xl"
        id={post._id}
        to={`/post/${post._id}`}
      >
        <img src={profileImg} className=" w-48 rounded-full" />
        <div className="flex flex-col md:flex-row w-full justify-between md:mr-14">
        <div className="py-4 md:py-0 md:ml-10">
          <h2 className=" font-bold text-lg">{post.title}</h2>
          <h2>
            <p>By: {post.authorName}</p>
          </h2>
        </div>
        <p className="md:w-2/3 overflow-hidden mb-5 md:mb-0">{post.description}</p>
        <p>{time.format(post.createdAt)}</p>
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
          <h3 className="text-center pt-5 text-3xl font-semibold">Feed</h3>
          <div className="flex flex-col justify-center items-center">
            {mapPostList.reverse()}
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
