import React from 'react';
import { Link } from 'react-router-dom';
import Video from '../assets/img/Bees.mp4'
import Bees from '../assets/img/east.jpg'
// import { useQuery } from '@apollo/client';

// import { QUERY_PROFILES } from '../utils/queries';




const Home = () => {
  return (
    <main>
<div className="text-center p-8 ">
    <div className="flex flex-wrap items-center mt-20 text-left justify-center ">
        <div className="w-full md:w-3/4 lg:w-1/2 px-4">
            <video src={Video} muted autoPlay loop alt="project members" className=" rounded-full aspect-square-full border-merino-400">
        </video>
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
                About
              <span className="font-bold text-yellow-500">Us</span>
            </h2>
            <p className="sm:text-lg mt-6">
            Welcome to BeeAware, a dedicated platform aimed at raising awareness about the vital role of local pollinators in Florida. We are passionate about promoting the significance of these essential creatures and the invaluable service they provide to our ecosystems and food production.
            <br/>
            Join our website dedicated to local pollinators in Florida to gain valuable insights into their importance, discover the latest news and research, and connect with a passionate community. 

            </p>
              <div className="mt-5 sm:flex md:mt-8">
                 <div className="rounded-md shadow">
                  <Link to="/signup"
                        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-yellow-400 border border-transparent rounded-md hover:bg-yellow-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                        Signup
                    </Link>
             </div>
            </div>

        </div>
    </div>

    <div className="flex flex-wrap flex-row-reverse items-center mt-20 text-left justify-center">
        <div className="w-full md:w-3/4 lg:w-1/2 px-4">
            <img src= {Bees} alt="bulk" className="rounded-full  h-64 m-auto">
        </img>
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
                Fun
              <span className="font-bold text-yellow-500">Fact</span>
            </h2>
            <p className="sm:text-lg mt-6">
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
