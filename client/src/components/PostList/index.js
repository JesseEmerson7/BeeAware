import React, {useState} from "react";
import { DELETE_POST } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

const PostList = ({ posts}) => {

    const [deletePost, {error}] = useMutation(DELETE_POST);
    const [postList, setPostList] = useState(posts);
      //delete button finds id for post and deletes it from the database. then updates post list state
const handleDeletePost = async (event) =>{
    try{
        console.log(event.target.id);
        const postToDelete = event.target.id
        await deletePost({variables:{postId:postToDelete}})
        const updatedPostList = postList.filter((post) => post._id !== postToDelete);
        setPostList(updatedPostList);
    }catch(error){
        console.log(error);
    }
  
  
  }

    if (posts.length === 0) {
      return <div className=" text-center mt-10 font-bold border border-yellow-300 w-full mx-10">You have no blog posts yet!</div>;
    } else {
      return (
        <>
          {postList.map((post) => (
            <div
              key={post._id}
              className="flex flex-row justify-center content-center border border-yellow-200 gap-5 h-12 py-2 w-full md:mx-10"
            >
              <h2 className="inline w-1/5 ml-7">{post.createdAt}</h2>
              <h2 className="inline w-3/5">{post.title}</h2>
  
              <div className="flex flex-row justify-center gap-4 w-1/5">
                <Link className="material-symbols-outlined hover:cursor-pointer hover:" id={post._id} to={`/update/${post._id}`}>
                  edit_square
                </Link>
                <span className="material-symbols-outlined pr-4 hover:cursor-pointer" onClick={handleDeletePost}  id={post._id}>
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
  