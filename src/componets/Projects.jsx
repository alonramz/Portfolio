import React from "react";
// images
import Gateway from "../assets/exploreOaxaca.png";
import eCommerce from "../assets/losaromasHome.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      {/* container for projects */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-emerald-300">
            Projects
          </p>
          <p className="py-6">My critical thinking, time management, designing, and professional skills have enchanted immensely working on these projects.</p>
        </div>

        {/* grid container */}
        <div className="grid sm:grid-cols-2 md:grid-col-3 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Gateway})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-white tracking-wider">
                Gateway: beginner basic HTML & CSS flexbox
              </span>
              <div className="pt-8 text-center">
                <a href="https://alonramz.github.io/Oaxaca-Mexico/" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Preview
                  </button>
                </a>
                <a href='https://github.com/alonramz/Oaxaca-Mexico' rel="noopener noreferrer" target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${eCommerce})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-white tracking-wider">
                eCommerce Shop: web accessibility, Node.JS, React, JSON, & MySQL
              </span>
              <div className="pt-8 text-center">
                <a href="https://losaromas.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Preview
                  </button>
                </a>
                <a href='https://github.com/alonramz/LosAromas321' rel="noopener noreferrer" target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
