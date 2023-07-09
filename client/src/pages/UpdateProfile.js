import { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER_PROFILE } from "../utils/queries";
import { UPDATE_USER } from "../utils/mutations";
import auth from "../utils/auth";
import { useNavigate } from "react-router-dom"

const UpdateProfile = () => {
  //bringing in navigate from react router
  const Navigate = useNavigate();
  //grabbing user info to query
  const userInfo = auth.getProfile();

  //query to grab user profile info from the logged in profile.
  const { loading, data } = useQuery(QUERY_USER_PROFILE, {
    variables: { userId: userInfo.data._id },
  });

  //mutation for updating user info
  const [updateThatUser, { error }] = useMutation(UPDATE_USER);

  //state for the form from user data
  const [userData, ChangeUserData] = useState(data?.user);
  console.log(userData);

  useEffect(() => {});

  //handel form change to update the state of the user data
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    ChangeUserData({
      ...userData,
      [name]: value,
    });
    console.log(userData);
  };

  // on submit the user data will use mutation to change the database and update the profile page.
  const handleFormSubmit = async (event) => {
    console.log("clicking");
    event.preventDefault();
    try {
      const { data } = await updateThatUser({
        variables: { bio: userData.bio },
      });
      //if data is returned then user is sent to profile page
      if (data) {
        Navigate("/me");
      }
    } catch (error) {
      console.log(error);
      window.alert("There was an error updating your profile. Please try again later or contact support.")
    }
  };

  //if user data has not been fetched a loading indicator will be displayed
  if (loading) {
    return (
      <>
        <div>Fetching profile info...</div>
      </>
    );
  }

  // if loading is done then the form is displayed with the user info
  return (
    <>
      <div className=" text-center text-lg my-5">
      Here you can edit your profile information.
      </div>
      <form onChange={handleFormChange} onSubmit={handleFormSubmit} className="flex flex-col justify-center ">
        <div className="mb-6 mx-8 lg:mx-20">
          <label
            for="base-input"
            className="block mb-2 ml-5 text-sm font-medium text-gray-900 dark:text-white"
          >
            Change Bio
          </label>
          <input
            type="text"
            name="bio"
            value={userData.bio}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button type="submit" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-5 mb-2 w-2/4 mx-auto dark:focus:ring-yellow-900">Update</button>
      </form>
    </>
  );
};

export default UpdateProfile;
