import React, { useState, useEffect } from "react";
import { DELETE_POST } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import "./PostList.css";

const PostList = ({ posts }) => {
  const [deletePost, { error }] = useMutation(DELETE_POST);
  const [postList, setPostList] = useState([]);
  //delete button finds id for post and deletes it from the database. then updates post list state
  const handleDeletePost = async (event) => {
    try {
      console.log(event.target.id);
      const postToDelete = event.target.id;
      await deletePost({ variables: { postId: postToDelete } });
      const updatedPostList = postList.filter(
        (post) => post._id !== postToDelete
      );
      setPostList(updatedPostList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (posts) {
      setPostList(posts);
    }
  }, [posts]);

  if (!posts || posts.length === 0) {
    return (
      <section className="w-full md:w-8/12 lg:w-4/6 xl:w-3/6  flex flex-col mx-auto pb-4 border rounded-lg shadow-lg bg-amber-100 bg-opacity-20">
        <header
          id="post-list-header"
          className="w-full h-24 text-center rounded-t-lg flex justify-center items-center"
        >
          <div id="post-title" className=" w-1/2 md:w-3/6 ">
            <h2 className=" text-xl font-bold">No blog posts yet? </h2>
            <p className="text-lg">Post something buzz-worthy!</p>
          </div>
        </header>
        {/* body row */}
        <div className="flex flex-col text-center">
          {/* col 1 */}
          <div className="border w-10/12 mx-auto mt-6 mb-3 rounded-lg shadow-md bg-white">
            <div>
              <h2 className=" font-semibold text-lg border rounded-t-lg bg-yellow-400">
                Got a question?
              </h2>
              <p className=" text-lg">
                Post a question for other bee keepers or experts to answer!{" "}
                <br />
                (coming soon)
              </p>
            </div>
          </div>
          {/* col 2 */}
          <div>
            <div className="border w-10/12 mx-auto rounded-lg shadow-md bg-white mb-10 text-lg">
              <h2 className="font-semibold text-lg border rounded-t-lg bg-yellow-400">
                Post about anything bee related on the blog.
              </h2>
              <p>
                Talk about anything such as backyard bee keeping, <br />{" "}
                Florida's local pollinators, and so much more.
              </p>
            </div>
            <Link
              to={"/blog"}
              className=" focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 w-5/6 mx-auto md:w-1/5"
            >
              {" "}
              View the blog page
            </Link>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div className="w-full md:w-8/12 lg:w-4/6 xl:w-3/6  flex flex-col mx-auto border rounded-lg shadow-lg bg-amber-100 bg-opacity-20">
        <header
          id="post-list-header"
          className="w-full h-16 text-center rounded-t-lg flex justify-center items-center"
        >
          <div id="post-title" className=" w-1/2 md:w-2/6  ">
            <h2 className=" text-xl font-bold">My Posts</h2>
          </div>
        </header>
        {postList.map((post) => (
          <div
            key={post._id}
            className="flex flex-row justify-center content-center border border-yellow-200 gap-5 h-12 py-2 w-full lg:w-3/4 md:mx-auto my-3 rounded-xl bg-yellow-100"
          >
            <h2 className="inline w-1/5 ml-7">{post.createdAt}</h2>
            <h2 className="inline w-3/5">{post.title}</h2>

            <div className="flex flex-row justify-center gap-4 w-1/5">
              <Link
                className="material-symbols-outlined hover:cursor-pointer hover:"
                id={post._id}
                to={`/update/${post._id}`}
              >
                edit_square
              </Link>
              <span
                className="material-symbols-outlined pr-4 hover:cursor-pointer"
                onClick={handleDeletePost}
                id={post._id}
              >
                delete
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default PostList;
