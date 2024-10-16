import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo/BeeAware3.png";
import logotext from "../../assets/logo/titlelogowhite.png";
import Login from "../Login";
import Auth from "../../utils/auth";

const Header = () => {
  let navigate = useNavigate();
  useEffect(() => {
    const spanElement = document.querySelector("#root > nav > div > a > span");
    if (spanElement) {
      spanElement.classList.add("text-3d-effect"); // Add the 3D effect class
    }
  }, []);

  const logout = (event) => {
    navigate("/Home");
    Auth.logout();
  };

  return (
    <>
      {/* login component is modal dropdown */}
      <Login />
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className=" flex flex-wrap items-center justify-between p-2 px-10">
          <Link to="/" className="flex items-center">
            <img
              id="logo-img"
              src={logo}
              className="md:h-8 mr-3 hidden md:block"
              alt="BeeAware Logo"
            />
            <img
              id="logo-text"
              src={logotext}
              className="md:h-12 md:mr-3 h-10 ml-5 md:ml-0 "
              alt="logo text title"
            />
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col items-center font-semibold md:p-6 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-yellow-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 zigzag-menu h-10">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-gray-800  rounded md:bg-transparent  md:p-0 md:dark:bg-transparent"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Info"
                  className="block py-2 pl-3 pr-4 text-gray-800  rounded md:bg-transparent  md:p-0 md:dark:bg-transparent"
                >
                  Info
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blog
                </Link>
              </li>
              {Auth.loggedIn() && (
                <li>
                  <Link
                    to="/me"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Profile
                  </Link>
                </li>
              )}

              <li>
                <div className="">
                  <div className="py-1">
                    {Auth.loggedIn() ? (
                      <Link
                        onClick={logout}
                        className="bg-amber-400 p-2 rounded-xl"
                      >
                        Sign Out
                      </Link>
                    ) : (
                      <Link
                        to={"/signIn"}
                        className=" bg-amber-400 p-2 rounded-xl"
                      >
                        Sign in
                      </Link>
                    )}
                  </div>
                </div>
                {/* <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  More{" "}
                  <svg
                    className="w-5 h-5 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
