import React from "react";
import profile from "../assets/profile.png"

const About = () => {
  return (
    <div className="text-white">
      <div className="flex justify-between items-center mt-[8vh]">
        <div className="">
          <div className="text-center py-8">
            <h1 className="font-style text-4xl font-medium">
              LET ME <span className="text-purple">INTRODUCE</span> MYSELF
            </h1>
          </div>
          <div className="ms-[10rem] flex flex-col space-y-5 font-main text-lg font-semibold">
            <p>Hai Everyone, I'm Adithyan from Salem, Tamil Nadu</p>
            <p>
              My Fields of interest are <span className="text-purple">Mern Stack Development</span> and also in <span>UI/UX
              Design</span>
            </p>
            <p>
              I like building modern, scalable web applications using <span className="text-purple">React.js </span>
              and <span className="text-purple">Express.js</span>, blending functionality with sleek design.
            </p>
          </div>
        </div>
        <div className="me-[10rem]">
            <img src={profile} alt="" className="w-[30vw]"/>
        </div>
      </div>
    </div>
  );
};

export default About;
