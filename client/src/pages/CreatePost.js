const CreatePost = () => {
  return (
    <>
      <div className="mx-5 mt-10 md:mt-20 shadow-lg p-4 border border-gray-500">
        <div >
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Blog Post Title
          </label>
          <input
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description (short and sweet!)
          </label>
          <input
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <label
          for="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Blog body
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Buzz Buzz.."
        ></textarea>
        <div className="flex justify-center mt-4">
          <button
            type="button"
            className=" w-3/4 shadow-md md:w-1/4 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
