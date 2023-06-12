import React, { useState } from "react";
// import { Link } from 'react-router-dom';

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  //form initial state
  const [formState, setFormInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [signThemUp, { error }] = useMutation(ADD_USER);
  //changing form state based on input from user
  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setFormInput({
      ...formState,
      [name]: value,
    });
  };

  //form Submitting logic
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    const newUserInfo = formState;
    try {
      const user = await signThemUp({
        variables: { ...newUserInfo },
      });
      const token = user.data.addUser.token;
      console.log(user.data.addUser.token);
      Auth.login(token);
      setFormInput({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      //temporary error msg
      window.alert("Error, please try again.");
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-center mt-10 font-semibold text-xl">
        Sign up now to see what all the buzz is about!
      </h1>
      <form onSubmit={handleFormSubmit} className=" md:px-32 p-10">
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your username
          </label>
          <input
            onChange={handleFormChange}
            name="username"
            type="text"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            onChange={handleFormChange}
            name="email"
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@mail.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            onChange={handleFormChange}
            name="password"
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new account
        </button>
      </form>
    </>
  );
};

export default Signup;
