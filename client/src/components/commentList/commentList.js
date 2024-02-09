import "./commentList.css";



export default function commentList({comments}) {
  let commentsListArr = comments.map((comment) => {
    return (
      <div className="commentDiv">
        <h1>{comment.author}</h1>
        <p>{comment.body}</p>
        <p>{comment.likes}</p>
        <p>{comment.createdAt}</p>
      </div>
    );
  });
   //ToDo! style comment div / add button to toggle comments
  return <div className=" bg-amber-100 w-full  md:w-4/6 mx-auto rounded-lg mt-10">
 <h3 className=" text-xl"> {comments ? "Comments" : <></>}</h3>
  <div>{comments ? commentsListArr : <></>}</div>
  </div>;
}
