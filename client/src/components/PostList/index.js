


const PostList = ({ posts }) => {
    if (posts.length === 0) {
      return <div>You have no blog posts yet!</div>;
    } else {
      return (
        <>
          {posts.map((post) => (
            <div
              key={post._id}
              data-id={post._id}
              className="flex flex-row justify-center content-center border border-yellow-200 gap-5 h-12 py-2 w-full md:mx-10"
            >
              <h2 className="inline w-1/5 ml-7">{post.createdAt}</h2>
              <h2 className="inline w-3/5">{post.title}</h2>
  
              <div className="flex flex-row justify-center gap-4 w-1/5">
                <span className="material-symbols-outlined hover:cursor-pointer hover:">
                  edit_square
                </span>
                <span className="material-symbols-outlined pr-4 hover:cursor-pointer">
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
  