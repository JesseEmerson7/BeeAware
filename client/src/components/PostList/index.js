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
      <section className="w-full md:w-3/4 flex flex-col mx-auto border rounded-lg shadow-lg">
        <header
          id="post-list-header"
          className="w-full h-24 text-center rounded-t-lg flex justify-center items-center"
        >
          <div id="post-title" className=" w-2/6">
            <h2 className=" text-xl font-bold">No blog posts yet? </h2>
            <p className="text-lg">Post something buzz-worthy!</p>
          </div>
        </header>
        {/* body row */}
        <div>
          {/* col 1 */}
          <div>
            <div>
              <h2>Got a question?</h2>
              <p>Post a question for other bee keepers or experts to answer!</p>
            </div>
            <Link> View Blog</Link>
          </div>
          {/* col 2 */}
          <div>
            <div>
              <h2>Post about anything bee related on the blog.</h2>
              <p>
                There are many subject to talk about from backyard bee keeping,
                to Florida's local pollinators. Post whats on your mind!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <>
        {postList.map((post) => (
          <div
            key={post._id}
            className="flex flex-row justify-center content-center border border-yellow-200 gap-5 h-12 py-2 w-full lg:w-3/4 md:mx-auto"
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
      </>
    );
  }
};

export default PostList;
