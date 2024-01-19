import { useEffect, useRef, useState } from "react";
import EyeSvg from "./eyeSvg";
import "../components/form.css";
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
    userId: "",
    password: "",
  });
  const [userInputColor, changeUserColor] = useState(true);
  const [passInputColor, changePassColor] = useState(true);
  const [submitErr, changeErr] = useState(false);
  const [loginBtnValue, changeLoginBtn] = useState("Log-in");
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
    if (name === "userId") {
      changeUserColor(true);
    } else {
      changePassColor(true);
    }
    //changing form object value
    changeFormInputs({
      ...formInputs,
      [name]: value,
    });
  };
  //on submit handler
  const handleSubmit = (e) => {
    /*Here I would send a POST request to the server side. I would then make a database query with that information (SELECT * FROM users
WHERE username = userId AND password = password;) The password would be unHashed and compared. response would be sent back to the front end. If no match error message would be displayed above login button
A token would be added to the user as well when logged in.
 */
    e.preventDefault();
    //temp input checker until server side is done.
    changeErr(false);
    changeLoginBtn("Submitting...");
    if (formInputs.userId === "admin" && formInputs.password === "admin") {
      changeLoginBtn("Log-in");
      changeFormInputs({
        userId: "",
        password: "",
      });
      setPage(false);
      // window.location = "https://github.com/JesseEmerson7";
    } else if (!formInputs.userId) {
      firstInputRef.current.focus();
    } else if (!formInputs.password) {
      secondInputRef.current.focus();
    } else {
      changeErr(true);
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
      <div className="w-full lg:w-5/12 xl:w-4/12 md:w-8/12 md:shadow-2xl md:p-16 md:relative md:bottom-24 md:mx-auto md:rounded-sm px-4 pt-2 bg-white min-h-screen">
        {/* title */}
        <div className="mb-4">
          <span className=" text-2xl">Welcome to</span>
          <a href="https://forms.floridarealtors.org/index/signin">
            <img
              src="https://forms.floridarealtors.org/fs2/images/siteLogos/login-simplicity-logo.png"
              alt="Welcome to Form Simplicity"
            />
          </a>
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
              User ID
            </label>
            <input
              onChange={(e) => handleFormChange(e)}
              onBlur={handleEmptyInput}
              name="userId"
              autofocus
              type="text"
              required
              id="usernameInput"
              className={userInputColor ? "formInput" : "formInputFalse"}
              ref={firstInputRef}
            />
            <div className={userInputColor ? "hidden" : "errorPop fadeIn"}>
              Please enter your user ID
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
          <div className="mb-10">
            <a
              className="dgLink text-sm hover:underline font-semibold"
              href="https://github.com/JesseEmerson7"
            >
              I would like to reset or register my password.
            </a>
          </div>

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

          {/* info */}
          <div>
            <p className=" text-xs mb-10">
              We're committed to your privacy. Form Simplicity uses your
              provided information to contact you about new features, training,
              and more. You may unsubscribe from these communications at any
              time.
              <a
                href="https://www.floridarealtors.org/"
                className=" no-underline text-blue-600 hover:underline"
              >
                Privacy Policy
              </a>
            </p>
            <a href="https://www.floridarealtors.org/" target="blank">
              <img
                className="w-full pb-14"
                src="https://forms.floridarealtors.org/fs2/images/loginLogos/florida-logo.png"
                alt="Florida Realtors Logo"
                id="formLogo"
              />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
