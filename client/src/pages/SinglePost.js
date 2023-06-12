import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_POST } from "../utils/queries";
import './SinglePost.css'

const SinglePost = () => {
  const {id} = useParams();
  console.log(id);


  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId: id },
  });

  console.log(data);
  const postData = data?.getSinglePost
  console.log(postData);
  

  if(loading){
    return(
        <>
        <h1>Loading data...</h1>
        </>
    )
  }

  const {title, body, createdAt} = postData;
  return (
    <div id="post-card" className="text-center flex flex-col  h-screen ">
    <div className="my-5 md:mt-20  "> <h1 className="font-semibold text-xl">{title}</h1>
      <h1 className="text-sm">Posted on: {createdAt}</h1>
      </div>
    <p className="text-lg w-5/6 mx-auto">{body}</p>
     
    </div>
  );
};

export default SinglePost;
