import React from "react";
import "./Blog.css";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_POSTS } from "../utils/queries";
import { Link } from "react-router-dom";
import profileImg from "../assets/img/HoneyBee_Img.jpg";

const Blog = () => {
  //date formatting logic for post list
  const time = new Intl.DateTimeFormat("en-us", {
    dateStyle: "short",
  });

  const { loading, data } = useQuery(QUERY_ALL_POSTS);

  if (loading && !data) {
    return (
      <div className="flex h-screen justify-center items-center ">
        <h1 className=" bg-yellow-200 p-7 text-xl font-semibold rounded-2xl border-2 border-yellow-500 shadow-xl shadow-amber-300">
          Loading...
        </h1>
      </div>
    );
  }
  const loadingInfo = <div>Loading</div>;

  const mapList = data?.allPosts ?? [];
  // Reverse a copy so we do not mutate Apollo query data directly.
  const orderedPosts = [...mapList].reverse();

  // map over post list and create blog list
  const mapPostList = orderedPosts.map((post) => {
    return (
      <Link
        className=" w-11/12 p-4 bg-yellow-100 hover:bg-yellow-200 hover:border-y-amber-400 transition-all duration-300  border border-gray-200 rounded-lg md:rounded-full shadow-lg sm:p-6 dark:bg-gray-800 dark:border-gray-700 mt-10 text-center hover:cursor-pointer flex flex-col md:flex-row justify-start items-center hover:shadow-2xl"
        id={post._id}
        to={`/post/${post._id}`}
      >
        <img
          src={profileImg}
          className=" w-48 rounded-full"
          alt="Bee blog post thumbnail"
        />
        <div className="flex flex-col md:flex-row w-full justify-between md:mr-14">
          <div className="py-4 md:py-0 md:ml-10">
            <h2 className=" font-bold text-lg">{post.title}</h2>
            <h2>
              <p>By: {post.authorName}</p>
            </h2>
          </div>
          <p className="md:w-2/3 overflow-hidden mb-5 md:mb-0">
            {post.description}
          </p>
          <p>{time.format(post.createdAt)}</p>
        </div>
      </Link>
    );
  });

  return (
    <main className="blog-page">
      <header
        className="blog-hero w-full text-center flex flex-col justify-center items-center"
      >
        <div className="blog-hero-text py-3 px-5">
          <h1 className="text-4xl md:text-6xl">Welcome</h1>
          <h2 className="text-2xl md:text-4xl">to the Bee Blog</h2>
        </div>
      </header>
      {/* Blog feed section */}
      <div className="blog-feed-bg px-0 md:px-9 pb-10">
        <section className="blog-feed-surface">
          <h3 className="text-center pt-5 text-3xl font-semibold">Feed</h3>
          <div className="flex flex-col justify-center items-center">
            {!loading ? mapPostList : loadingInfo}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Blog;
