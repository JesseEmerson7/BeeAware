import { useEffect, useRef, useState } from "react";
import EyeSvg from "./eyeSvg";
import "./form.css";
import logo from "../../assets/logo/BeeAware3.png";
// ---- for future use
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// ----

//login form component
const Form = ({ setPage }) => {
  //crating a ref to first input and second
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  //focusing on load
  useEffect(() => {
    firstInputRef.current.focus();
  }, []);
  //----creating states---
  const [passwordState, setPasswordState] = useState("password");
  const [formInputs, changeFormInputs] = useState({
    email: "",
    password: "",
  });
  const [userInputColor, changeUserColor] = useState(true);
  const [passInputColor, changePassColor] = useState(true);
  const [submitErr, changeErr] = useState(false);
  const [loginBtnValue, changeLoginBtn] = useState("Log-in");
  const [login] = useMutation(LOGIN_USER);
  //----component functions----
  //toggle to view password
  const handleEyeClick = () => {
    passwordState === "password"
      ? setPasswordState("text")
      : setPasswordState("password");
  };
  //form change handler
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    //changing color back to green if not empty
    name === "email" ? changeUserColor(true) : changePassColor(true);

    //changing form object value
    changeFormInputs({
      ...formInputs,
      [name]: value,
    });
  };
  //on submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    changeErr(false);
    changeLoginBtn("Submitting...");
    //checking database for user and token on local storage
    try {
      const { data } = await login({
        variables: { ...formInputs },
      });
      Auth.login(data.login.token);
      changeLoginBtn("Log-in");
      changeFormInputs({
        userId: "",
        password: "",
      });
    } catch (e) {
      console.log(e);
      if (
        e.message === "No user with this email found!" ||
        e.message === "Incorrect password!"
      ) {
        firstInputRef.current.focus();
        changeErr(true);
      }
    }
    changeLoginBtn("Log-in");
  };
  //onBlur of inputs
  const handleEmptyInput = (e) => {
    const input = e.target.value;
    input ? changeUserColor(true) : changeUserColor(false);
  };

  const handleEmptyPassInput = (e) => {
    const input = e.target.value;
    input ? changePassColor(true) : changePassColor(false);
  };
  //----JSX return-----------------------------------------------------------------------
  return (
    <section className=" w-full min-h-screen">
      {/* form div */}
      <div className="w-full lg:w-5/12 xl:w-4/12 md:w-8/12 md:shadow-2xl md:p-16 md:my-10  md:mx-auto md:rounded-sm px-4 pt-2 bg-amber-100 min-h-screen border-solid border-amber-500 border">
        {/* title */}
        <div className="mb-4 text-center">
          <span className=" text-4xl " id="titleLogin">
            BeeAware Login
          </span>
          <img
            src={logo}
            alt="Logo"
            width={"200px"}
            className=" rounded-full mx-auto mt-3"
          />
        </div>
        {/* form user / password */}
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* username */}
          <div className="flex flex-col mb-12">
            <label
              className={
                userInputColor
                  ? "needed label font-bold"
                  : "needed text-red-600 label font-bold"
              }
              for="username"
            >
              Email
            </label>
            <input
              onChange={(e) => handleFormChange(e)}
              onBlur={handleEmptyInput}
              name="email"
              autofocus
              type="text"
              required
              id="usernameInput"
              className={userInputColor ? "formInput" : "formInputFalse"}
              ref={firstInputRef}
            />
            <div className={userInputColor ? "hidden" : "errorPop fadeIn"}>
              Please enter your email
            </div>
          </div>
          {/* password */}
          <div className="mb-10">
            <div className="flex flex-row justify-between">
              {/* reveal button to go here */}
              <label
                className={
                  passInputColor
                    ? "needed label font-bold"
                    : "needed text-red-600 label font-bold"
                }
                for="username"
              >
                Password
              </label>
              <EyeSvg onClick={handleEyeClick} />
            </div>
            <input
              onChange={(e) => handleFormChange(e)}
              onBlur={(e) => {
                handleEmptyPassInput(e);
              }}
              ref={secondInputRef}
              name="password"
              autofocus
              type={passwordState}
              required
              id="usernameInput"
              className={
                passInputColor ? "formInput w-full" : "formInputFalse w-full"
              }
            />
            <div className={passInputColor ? "hidden" : "errorPop fadeIn"}>
              Please enter your password
            </div>
          </div>
          {/* reset password here  */}

          <div
            className={!submitErr ? "hidden" : "errorPop text-center text-xl"}
          >
            Invalid user ID or password
          </div>
          <div className="mb-5 mt-4 w-full flex justify-center">
            <button className="loginBtn block duration-200" type="submit">
              {loginBtnValue}
            </button>
          </div>

          <Link to={"/signup"} className=" flex justify-center text-amber-500">
            Don't have an account? Register a new account here!
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Form;
