import React from "react";
import Headshot from '../assets/Professional.JPG'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-emerald-300">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>I'm Alondra, nice to meet you. Explore my work!</p>
            <img className='w-100 pt-2 mx-auto' src={Headshot} alt="my picture" />
          </div>
          <div>
            I am passionate about creating outstanding projects that impact the
            lives of others. I strive to make an impact in a
            large corporation while continuing to develop my skills and
            knowledge. 
            <br/>
            <br/>
            I started my career in Web Development in a coding apprenticeship with Road to Hire, 
            a non-profit organization paving the way for minorities. 
            <br/>
            <br/>
            I've worked on multiple projects I am extremely proud of. 
            Starting with creating a basic HTML & CSS website, presenting 5-7 minute speeches, learning JavaScript,
            designing an app using APIs, to developing a full stack eCommerce shop using Node.js, React & MySQL.
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
