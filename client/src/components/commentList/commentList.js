import "./commentList.css";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";

export default function CommentList({ comments }) {
  //states
  const [CommentPop, changeCommentPop] = useState(false);
  const [commentText, updateCommentText] = useState("")

  //handle comment like and adding or subtracting value to DB
  const handleLike = () => {
    //toDO: create mutation to add likes to DB and add 1 to the like value locally
  };
  //comment post button or cancel
  const handleCommentButton = (e) => {
    e.preventDefault();
    //toDO: MUTATION NEEDED
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
          <p> {comment.likes > 0 ? comment.likes : <></>}</p>
          <div id={comment._id} onClick={handleLike}>
            <span
              name="like"
              className="material-symbols-outlined mx-2 mt-1 hover:bg-amber-500 hover:rounded-lg hover:text-white duration-200 hover:cursor-pointer"
            >
              thumb_up
            </span>
            <span
              name="dislike"
              className="material-symbols-outlined mx-2 mt-1  hover:bg-amber-500 hover:rounded-lg hover:text-white duration-200 hover:cursor-pointer"
            >
              thumb_down
            </span>
          </div>
        </div>
      </div>
    );
  });
  //ToDo! style comment div / add button to toggle comments / add comment mutation
  if (comments.length > 0) {
    return (
      <div className=" bg-amber-100 w-full  md:w-4/6 mx-auto rounded-lg mt-10">
        <h3 className=" text-xl">
          {comments.length > 0 ? `Comments (${comments.length})` : <></>}
        </h3>
        {/* add a comment */}
        <form onSubmit={ handleCommentButton}>
          {/* comment input box */}
          <input
            type="text"
            placeholder="Add a comment..."
            className=" w-5/6 m-3 mb-0 rounded-lg border-none"
            onFocus={() => changeCommentPop(true)}
            onChange={(e)=> updateCommentText( e.target.value)}
          />
          <div
            className={` space-x-3 text-right w-5/6 mt-2  ${
              CommentPop ? "" : "hidden"
            } `}
          >
            <button
              className=" rounded-xl p-1 hover:bg-amber-500 duration-100"
              onClick={() => changeCommentPop(false)}
            >
              Cancel
            </button>
            <button type="submit" className=" bg-amber-400 rounded-xl p-1 hover:bg-amber-500 duration-300 " >
              Comment
            </button>
          </div>
        </form>
        <div>{comments.length > 0 ? commentsListArr : <></>}</div>
      </div>
    );
  } else {
    return <></>;
  }
}
