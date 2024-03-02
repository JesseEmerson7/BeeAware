import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_POST } from "../utils/queries";
import "./SinglePost.css";
import CommentList from "./../components/commentList/commentList.js"
// import { create } from "../../../server/models/Post";

const SinglePost = () => {
  const { id } = useParams();
  console.log(id);

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId: id },
  });

  console.log(data);
  const postData = data?.getSinglePost;
  

  if (loading) {
    return (
      <>
        <h1>Loading data...</h1>
      </>
    );
  }

  const { title, body, createdAt, authorName, author, comments } = postData;

  const dateNumber = parseInt(createdAt);
  const date = new Date(dateNumber);
  const formattedDate = date.toLocaleString();
  console.log(dateNumber);
  console.log(formattedDate);

  return (
    <div
      id="post-card"
      className="text-center flex flex-col  min-h-screen pb-10 "
    >
      <Link
        to={"/blog"}
        type="button"
        className=" md:w-24 w-16 mt-4 ml-5 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
      >
        Back
      </Link>
      <div className="my-5">
        <h1 className="font-semibold text-xl">{title}</h1>
        <h2>By: {authorName}</h2>
        <h1 className="text-sm">{formattedDate}</h1>
      </div>
      <p className=" md:w-4/6 mx-auto bg-yellow-50 md:p-10 p-4 rounded-lg text-xl">
        {body}
      </p>
      <CommentList comments={comments} id={id} author={author}/>
    </div>
  );
};

export default SinglePost;
