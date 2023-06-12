import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_SINGLE_POST } from "../utils/queries";
import { UPDATE_POST } from "../utils/mutations";
import { useParams } from "react-router-dom";

const UpdateForm = () => {
  //post id form url
  const { id } = useParams();

  console.log(id);
  //useState for update blog post form
  const [updateState, updatePostValue] = useState({
    title: "",
    description: "",
    body: "",
  });

  //alert state after update
  const [isVisible, setIsVisible] = useState(false);

  //mutation to update post
  const [updateThatPost, { error }] = useMutation(UPDATE_POST);

  //query for single post to get id and populate values.
  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId: id },
  });

  //when loaded grab values from query to update values
  useEffect(() => {
    if (!loading && data) {
      const { title, description, body } = data?.getSinglePost;
      updatePostValue({
        title: title,
        description: description,
        body: body,
      });
    }
  }, [loading, data]);

  //on change the state is changed based on the name and value
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    updatePostValue({
      ...updateState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(updateState);
    try {
      //posting post to db mutation
      const { data } = await updateThatPost({
        variables: { ...updateState, postId: id },
      });
      console.log(data);
      //if data comes back we go back to profile page
      if (data) {
        updatePostValue({
          title: "",
          description: "",
          body: "",
        });
        setIsVisible(true);
        setTimeout(() => {
          setIsVisible(false);
          window.location.assign("/me");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      window.alert("error updating");
      //temp err alert
    }
  };

  // console.log(data?.getSinglePost);
  if (loading) {
    return <div>Fetching Post Data...</div>;
  }

  return (
    <>
      <div
        id="alert-border-4"
        className={
          isVisible
            ? "flex p-4 mb-4 text-yellow-800 border-t-4 border-yellow-300 bg-yellow-50 dark:text-yellow-300 dark:bg-gray-800 dark:border-yellow-800"
            : "hidden"
        }
        role="alert"
      >
        <svg
          className="flex-shrink-0 w-5 h-5 "
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div className="ml-3 text-sm font-medium">
          Your blog post has been updated!
        </div>
      </div>
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
            required
            name="title"
            value={updateState.title}
            onChange={handleFormChange}
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
            required
            name="description"
            value={updateState.description}
            onChange={handleFormChange}
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
          required
          name="body"
          value={updateState.body}
          onChange={handleFormChange}
        ></textarea>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className=" w-3/4 shadow-md md:w-1/4 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default UpdateForm;
