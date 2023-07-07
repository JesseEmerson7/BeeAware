import { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER_PROFILE } from "../utils/queries";
import auth from "../utils/auth";

const UpdateProfile = () => {
  const userInfo = auth.getProfile();

  //query to grab user profile info from the logged in profile.
  const { loading, data } = useQuery(QUERY_USER_PROFILE, {
    variables: { userId: userInfo.data._id },
  });

  //state for the form from user data
  const [userData, ChangeUserData] = useState(data?.user);
  console.log(userData);

  useEffect(() => {});

  //handel form change to update the state of the user data
  const handleFormChange = (event) => {
    const {name, value} = event.target
    ChangeUserData({
        ...userData,
        [name]:value
    })
    console.log(userData)
  };

  // on submit the user data will use mutation to change the database and update the profile page.
  const handleFormSubmit = (event) => {};

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
      <div>
        Welcome {userData.username}, Here you can edit your profile information.
      </div>
      <form onChange={handleFormChange} onSubmit={handleFormSubmit}>
        <div className="mb-6">
          <label
            for="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Change Bio
          </label>
          <input
            type="text"
            name="bio"
            value={userData.bio}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </form>
    </>
  );
};

export default UpdateProfile;
