import React, { useState } from "react";
import auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { QUERY_USER_PROFILE } from "../utils/queries";
import { CREATE_POST } from "../utils/mutations";

const CreatePost = () => {
  const userInfo = auth.getProfile();
  console.log(userInfo.data._id);
  // console.log(userInfo.data._id);
  // const { loading, userData } = useQuery(QUERY_USER_PROFILE, {
  //   variables: { userId: userInfo.data._id },
  // });


  //pulling in mutation for posting and query to get username from token id.
  const [post, {error}] = useMutation(CREATE_POST);

//setting state for the form
  const [postState, changePostState] = useState({
    title: "",
    author: userInfo.data._id,
    description: "",
    body: "",
  });

  //on form change in input fields the state will change
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    changePostState({
      ...postState,
      [name]: value,
      //adding author here until context is figured out
      // author: userData.user.username
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(postState);
    try {
      //posting post to db mutation
      const {data} = await post({
        variables:{ ...postState }
      })
      console.log(data);
      //back to blog once this completes
      window.location.assign('/blog');

    } catch (error) {
      console.log(error);
      window.alert('error posting')
      //temp err alert
    }
  };

  return (
    <>
      <div className="mx-5 mt-10 md:mt-20 shadow-lg p-4 border border-gray-500">
        <form onSubmit={handleFormSubmit}>
          <div>
            <label
              for="small-input1"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Blog Post Title
            </label>
            <input
              type="text"
              id="small-input1"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required onChange={handleFormChange} name="title"
            />
          </div>
          <div>
            <label
              for="small-input2"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description (short and sweet!)
            </label>
            <input
              type="text"
              id="small-input2"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              required onChange={handleFormChange} name="description"
            />
          </div>
          <label
            for="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Blog body
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buzz Buzz.."
            required onChange={handleFormChange} name="body"
          ></textarea>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className=" w-3/4 shadow-md md:w-1/4 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" 
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
