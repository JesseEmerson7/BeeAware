import "./commentList.css";

export default function commentList({comments}) {
  let commentsListArr = comments.map((comment) => {
    return (
      <div>
        <h1>{comment.author}</h1>
        <p>{comment.body}</p>
        <p>{comment.likes}</p>
        <p>{comment.createdAt}</p>
      </div>
    );
  });

  return <>{commentsListArr}</>;
}
