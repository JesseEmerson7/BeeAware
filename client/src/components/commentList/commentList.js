import "./commentList.css";
import { formatDistanceToNow } from "date-fns";
import { useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import {
  ADD_COMMENT_TO_POST,
  ADD_LIKE_TO_COMMENT,
} from "../../utils/mutations";
import auth from "../../utils/auth";

export default function CommentList({ comments, author, id }) {
  //states
  const [CommentPop, changeCommentPop] = useState(false);
  const [commentText, updateCommentText] = useState("");
  const [loggedInPop, changeLoggedInPop] = useState(true);
  //ref
  const inputRef = useRef(null);
  //mutations
  const [createComment] = useMutation(ADD_COMMENT_TO_POST);
  const [addLikeToComment] = useMutation(ADD_LIKE_TO_COMMENT);

  //handle comment like and adding or subtracting value to DB
  const handleLike = async (e) => {
    //toDO: create mutation to add likes to DB and add 1 to the like value locally
    console.log(e.target.parentElement.id);
    let commentDiv = e.target.parentElement;
    let commentId = commentDiv.id;
    const likeCount = commentDiv.querySelector("p");
    const currentLikes = !isNaN(parseInt(likeCount.textContent.trim())) ? parseInt(likeCount.textContent.trim()) : 0;
    likeCount.textContent =  currentLikes + 1;
    try {
      const likes = addLikeToComment({ variables: { commentId: commentId } });
      //update comment like value
    } catch (error) {}
  };
  //comment post button or cancel
  const handleCommentButton = async (e) => {
    e.preventDefault();
    if (!auth.getToken()) {
      changeLoggedInPop(false);
      setTimeout(() => changeLoggedInPop(true), 4000);
    } else {
      console.log(id);
      try {
        const comment = await createComment({
          variables: { postId: id, author, body: commentText },
        });
        handleCancelButton(e);
      } catch (error) {
        console.log(error);
        window.alert("There has been an error processing your comment.");
      }
    }
  };

  const handleCancelButton = (e) => {
    e.preventDefault();
    // Clear the input box
    inputRef.current.value = "";
    //update the comment state
    updateCommentText("");
    // Close the comment pop if needed
    changeCommentPop(false);
  };

  let commentsListArr = comments.map((comment) => {
    return (
      <div key={comment._id} className="commentDiv bg-white rounded-sm m-3">
        <div className="flex ml-5">
          <h3 className=" text-lg">{comment.author}</h3>
          <span className="ml-3 mt-1 text-xs text-slate-400">
            {formatDistanceToNow(new Date(Number(comment.createdAt)))} ago
          </span>
        </div>
        <p className=" text-left ml-5">{comment.body}</p>
        <div className="flex ml-5">
          <div className="flex" id={comment._id} onClick={(e) => handleLike(e)}>
            <span
              name="like"
              className="material-symbols-outlined mx-2 mt-1 hover:bg-amber-500 hover:rounded-lg hover:text-white duration-200 hover:cursor-pointer"
            >
              thumb_up
            </span>
            <p> {comment.likes > 0 ? comment.likes : <></>}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className=" bg-amber-100 w-full pb-3  md:w-4/6 mx-auto rounded-lg mt-10">
      <h3 className=" text-xl">
        {comments.length > 0 ? `Comments (${comments.length})` : <></>}
      </h3>
      {/* add a comment */}
      <form onSubmit={handleCommentButton}>
        {/* comment input box */}
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-5/6 m-3 mb-0 rounded-lg border-none"
          onFocus={() => changeCommentPop(true)}
          onChange={(e) => updateCommentText(e.target.value)}
          ref={inputRef}
        />
        <div
          id="commentButton"
          className={` space-x-3 text-right w-5/6 mt-2  ${
            CommentPop ? "" : "hidden"
          } `}
        >
          <button
            className=" rounded-xl p-2 hover:bg-amber-500 duration-100"
            onClick={(e) => handleCancelButton(e)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className=" bg-amber-400 rounded-xl p-2 hover:bg-amber-500 duration-300 "
          >
            Comment
          </button>
        </div>
        {/* Logged in pop up  */}
        {loggedInPop || (
          <div>
            <h2 className=" text-red-400 text-lg">
              Please log in or create an account to join the BUZZ.
            </h2>
          </div>
        )}
      </form>
      <div>{comments.length > 0 ? commentsListArr : <></>}</div>
    </div>
  );
}
