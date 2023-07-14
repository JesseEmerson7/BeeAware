import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import { QUERY_USER_PROFILE } from "../utils/queries";

import Auth from "../utils/auth";
import samplePic from "../assets/img/HoneyBee_Img.jpg";
import PostList from "../components/PostList";

//react component function
const Profile = () => {
  //Bringing in use navigate from react router
  const navigate = useNavigate();
  //button for create blog post function and window redirect
  const createLoad = () => navigate( "/create");

  const userInfo = Auth.getProfile();

  const { loading, data, refetch } = useQuery(QUERY_USER_PROFILE, {
    variables: { userId: userInfo.data._id },
  });

  const [user, changeUserState] = useState({});

  useEffect(() => {
    if (!loading && data) {
      changeUserState(data);
    }
  }, [data, loading]);

  useEffect(() => {
    refetch();
  });

  // const username = user.user.username;
  // const userBio = user.user.bio;
  const posts = user?.user?.posts;
  // const userId = user.user._id;
  // console.log(user.user.username);

  //function for editing user profile info
  const editBio = document.getElementById("bio");
  const handleUserEdit = () => {
    console.log(editBio.innerText);
  };

  if (loading && !data) {
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
              <div>
                <h1 className=" font-bold text-xl text-center mt-3 md:text-start w-full">
                  {user?.user?.username}
                </h1>
                <p
                  id="bio"
                  className=" border rounded-lg border-gray-100 w-full mt-4 pl-5 pr-4 text-center md:text-left md:w-1/2  md:p-2 "
                >
                  {user?.user?.bio}
                </p>
              </div>
              {/* button to edit profile */}
              <div className="flex justify-end w-full md:w-1/2 relative bottom-3">
                <Link to={`/edit-profile`}>
                  <span className="material-symbols-outlined hover:cursor-pointer hover:text-gray-400 bg-amber-100 p-2 md:p-1 rounded-xl hover:bg-amber-500 ">
                    edit
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* div for blog posts to be populated */}
          <div
            id="blog-post-div"
            className=" flex flex-col w-full justify-center my-8 "
          >
            <button
              type="button"
              class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-10 w-5/6 mx-auto md:w-1/5"
              onClick={createLoad}
            >
              Create New Blog Post
            </button>

            <div>
              <PostList posts={posts} />
            </div>
          </div>
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
