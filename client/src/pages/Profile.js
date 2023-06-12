import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_USER_PROFILE } from "../utils/queries";

import Auth from "../utils/auth";
import samplePic from "../assets/img/HoneyBee_Img.jpg";
import PostList from "../components/PostList";


//react component function
const Profile = () => {


  //button for create blog post function and window redirect
  const createLoad = () => (window.location.href = "/create");

  const userInfo = Auth.getProfile();

  const { loading, data } = useQuery(QUERY_USER_PROFILE, {
    variables: { userId: userInfo.data._id },
  });

  const username = data?.user.username;
  console.log(data);
  const posts = data?.user.posts;
  console.log(posts);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>

      <div className="flex flex-col justify-center ">
        <section
          id="profile-container"
          className="flex flex-col w-full justify-center"
        >
          {/* profile section with img and username/bio   */}
          <div className="flex flex-col content-center mt-5  md:justify-center md:flex-row ">
            <div className=" w-full flex justify-center md:w-1/2 md:justify-end">
              <img src={samplePic} className="rounded-full" />
            </div>

            <div className="flex flex-col w-full justify-center md:w-1/2  md:ml-10">
              <h1 className=" font-bold text-xl w-full text-center mt-3 md:text-start">
                {username}
              </h1>
              <p className=" border border-gray-100 w-full mt-4 pl-5 pr-4 text-center md:text-left md:w-1/2  md:p-2 ">
                bio text here. Users can include any information about
                themselves that they would like to share with the community.
              </p>
            </div>
          </div>
          {/* div for blog posts to be populated */}
          <div
            id="blog-post-div"
            className=" flex flex-col w-full justify-center my-8 "
          >
            <button
              type="button"
              class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-5/6 mx-auto md:w-1/5 md:ml-10"
              onClick={createLoad}
            >
              Create New Blog Post
            </button>
            <h2 className="text-center font-semibold mt-4">My Blog Posts</h2>
            <div>
              <PostList posts={posts} />

              {/* <div
                id="blogPost-div"
                className=" flex flex-row justify-center content-center border border-yellow-200  gap-5 h-12 py-2 w-full md:mx-10 "
              >
                <h2 className="inline w-1/5 ml-7 ">date</h2>
                <h2 className="inline w-3/5"> title </h2>

                <div className="flex flex-row justify-center gap-4 w-1/5">
                  <span class="material-symbols-outlined hover:cursor-pointer hover:">
                    edit_square
                  </span>
                  <span class="material-symbols-outlined pr-4 hover:cursor-pointer">
                    delete
                  </span>
                </div>
              </div> */}
            </div>
          </div>
          {/* <div
            className=" flex flex-col w-full justify-center my-8 "
          >
            <h2 className="text-center font-semibold mt-4">My Comments</h2>
            <div>
              <div
                id="blogPost-div"
                className=" flex flex-row justify-center content-center border border-yellow-200  gap-5 h-12 py-2 w-full md:mx-10 "
              >
                <h2 className="inline w-1/5 ml-7 ">date</h2>
                <h2 className="inline w-3/5"> comment text </h2>

                <div className="flex flex-row justify-center gap-4 w-1/5">
                  <span class="material-symbols-outlined hover:cursor-pointer hover:">
                    edit_square
                  </span>
                  <span class="material-symbols-outlined pr-4 hover:cursor-pointer">
                    delete
                  </span>
                </div>
              </div>
            </div>
          </div> */}
        </section>
        <section
          id="past-comments-container"
          className="flex flex-col w-1/2"
        ></section>
      </div>
    </>
  );
};

export default Profile;
