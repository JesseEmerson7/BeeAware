import "./commentList.css";
import { formatDistanceToNow } from "date-fns";

export default function commentList({ comments }) {

//handle comment like and adding or subtracting value to DB
  const handleLike = () => {};

  let commentsListArr = comments.map((comment) => {
    return (
      <div className="commentDiv bg-white rounded-sm m-3">
        <div className="flex ml-5">
          <h3 className=" text-lg">{comment.author}</h3>
          <span className="ml-3 mt-1 text-xs text-slate-400">
            { formatDistanceToNow(new Date(Number(comment.createdAt)))  } ago
          </span>
        </div>
        <p className=" text-left ml-5">{comment.body}</p>
        <div className="flex ml-5">
          <p> {comment.likes > 0 ? comment.likes : <></>}</p>
          <div onClick={handleLike}>
            <span className="material-symbols-outlined mx-2 mt-1 hover:bg-amber-500 hover:rounded-lg hover:text-white duration-200">
              thumb_up
            </span>
            <span className="material-symbols-outlined mx-2 mt-1  hover:bg-amber-500 hover:rounded-lg hover:text-white duration-200">
              thumb_down
            </span>
          </div>
        </div>
      </div>
    );
  });
  //ToDo! style comment div / add button to toggle comments
  return (
    <div className=" bg-amber-100 w-full  md:w-4/6 mx-auto rounded-lg mt-10">
      <h3 className=" text-xl">
        {comments.length > 0 ? `Comments (${comments.length})` : <></>}
      </h3>
      <div>{comments.length > 0 ? commentsListArr : <></>}</div>
    </div>
  );
}
