import React from "react";
import about from "../assets/about6.png"

const About = () => {
  return (
    <div className="text-white">
      <div className="flex justify-center items-start">
        <div className="flex flex-col">
          <div className="font-main font-medium mt-[10vw] ms-10 w-[50vw] text-center text-2xl">
            <h1>
              Know Who <span className="text-purple">I'M</span>
            </h1>
          </div>
        <div className="w-[45vw] mt-[2vw] ms-10 text-justify text-lg">
            <p className="">👉Hi Everyone, Iam Adithyan from Salem, Tamil Nadu</p>
            <p className="py-3">👉Iam Currently Pursuing my Bachelor's Degree in Computer Science Engineering at Kongu Engineering College</p>
            <p>👉I'm interested in learning new technologies and work on it</p>
          </div>
        </div>
        <div className="mt-[4vw]">
          <img src={about} alt="" className="w-[30vw]"/>
        </div>
      </div>
    </div>
  );
};

export default About;
