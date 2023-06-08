import React from "react";

import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_PROFILE, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";
import samplePic from "../assets/img/HoneyBee_Img.jpg";

const Profile = () => {
  return (
    <>
      <div className="flex flex-col justify-center ">
        <section id="profile-container" className="flex flex-col w-full">
          {/* profile section with img and username/bio   */}
          <div className="flex flex-col content-center  md:justify-center md:flex-row ">
            <div className=" w-full flex justify-center md:w-1/2 md:justify-end">
              <img src={samplePic} className="rounded-full" />
            </div>

            <div className="flex flex-col w-full justify-center md:w-1/2  md:ml-10">
              <h1 className=" font-bold text-xl w-full text-center mt-3 md:text-start">JesseEmerson7</h1>
              <p className=" border border-gray-100 w-full mt-4 pl-5 pr-4 text-center md:text-left md:w-1/2  md:p-2 ">
                bio text here. Users can include any information about themselves that they would like to share with the community.
              </p>
            </div>
          </div>
          {/* div for blog posts to be populated */}
          <div id="blog-post-div" className=" flex flex-col w-full justify-center my-8">
            <h2 className="text-center font-semibold">My Blog Posts</h2>
            <div>
              <div id="blogPost-div" className="text-center border border-yellow-200 flex gap-5 ">
                <h2 className="inline justify-self-start ">date</h2>
                <h2 className="inline justify-self-center"> title </h2>
                <div className=" justify-self-end"><button className="inline">edit</button>
                <button className="inline">delete</button></div>
                
              </div>
            </div>
          </div>
        </section>
        <section id="past-comments-container" className="flex flex-col w-1/2">
          <button id="new-post-btn">New Blog Post</button>
          <div id="past-comment">
            <h3>Your Comments</h3>
            <div>
              <h3>Date</h3>
              <p>comment text</p>
              <button>Edit</button>
              <br />
              <button>Delete</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Profile;
