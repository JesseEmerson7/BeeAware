import { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER_PROFILE } from "../utils/queries";
import auth from "../utils/auth";

const UpdateProfile = () => {
  const userInfo = auth.getProfile();

  const { loading, data } = useQuery(QUERY_USER_PROFILE, {
    variables: { userId: userInfo.data._id },
  });
  const [userData, ChangeUserData] = useState(data?.user);
  console.log(userData);

  useEffect(() => {});

  if (loading) {
    return (
      <>
        <div>Fetching profile info...</div>
      </>
    );
  }

  return (
    <>
      <div>
        Welcome {userData.username}, Here you can edit your profile information.
      </div>
      <div className="mb-6">
        <label
          for="base-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Change Profile Bio
        </label>
        <input
          type="text"
          name="bio"
          value={userData.bio}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </>
  );
};

export default UpdateProfile;
