import React from 'react';
import { Link } from 'react-router-dom';
import Video from '../assets/img/Bees.mp4'
// import { useQuery } from '@apollo/client';

// import { QUERY_PROFILES } from '../utils/queries';



// const Home = () => {
//   return (
//     <main> 
//       <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
//     <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
//         <div className="text-left">
//             <h2
                //  className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
//                 About
//                 <span className="font-bold text-blue-500">Us</span>
//             </h2>
//             <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
//                  Signup to get more infomation about our Blog
//             </p>
//             <div className="mt-5 sm:flex md:mt-8">
//                 <div className="rounded-md shadow">
//                   <Link href=""
//                         className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
//                         Signup
//                     </Link>
//              </div>
//             </div>
//         </div>
//     </div>
//     <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
//         <div className="relative w-full p-3 rounded  md:p-8">
//             <div className="rounded-lg bg-white text-black w-full">
//                <video classNameName="w-full rounded-full " src={Video} muted autoPlay loop>  
//                 </video>
//             </div>
//         </div>
//     </div>
// </div>
//     </main>
//   );
// };
// export default Home;















const Home = () => {
  return (
    <main>
<div class="text-center p-8">


    <div class="flex flex-wrap items-center mt-20 text-left text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://picsum.photos/400/240" alt="project members" class="inline-block rounded shadow-lg border border-merino-400">
        </img></div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
                About
              <span className="font-bold text-blue-500">Us</span>
            </h2>
            <p class="sm:text-lg mt-6">
                We Provide every infomation that is needed to know about Bees
                Signup to find out more.
            </p>
        </div>
    </div>

    <div class="flex flex-wrap items-center mt-20 text-left text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://picsum.photos/400/240" alt="bulk editing" class="inline-block rounded shadow-lg border border-merino-400">
        </img></div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Fun Fact
            </h3>
            <p class="sm:text-lg mt-6">
            Bees maintain a temperature of 92-93 degrees Fahrenheit in their central brood
             nest regardless of whether the outside temperature is 110 or -40 degrees.
            </p>
        </div>
    </div>

</div>
    </main>
  );
};

export default Home;
