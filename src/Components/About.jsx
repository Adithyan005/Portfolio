import React from "react";
import about from "../assets/about6.png";
import html from "../assets/html.png";
import css from "../assets/css.png";

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
            <p className="">
              👉Hi Everyone, Iam Adithyan from Salem, Tamil Nadu
            </p>
            <p className="py-3">
              👉Iam Currently Pursuing my Bachelor's Degree in Computer Science
              Engineering at Kongu Engineering College
            </p>
            <p>👉I'm interested in learning new technologies and work on it</p>
          </div>
        </div>
        <div className="mt-[4vw]">
          <img src={about} alt="" className="w-[30vw]" />
        </div>
      </div>

      <div className="flex justify-center items-center pt-12">
        <h1 className="font-main text-2xl font-semibold">Skills</h1>
      </div>

      <div className="pt-5  grid grid-cols-3 gap-24 ms-20 me-20">
        <div className="flex flex-col gap-4 items-center justify-center rounded-2xl shadow-xl  w-[25vw] h-[25vh]"> 
          <img src={html} alt="" className="w-24" />
          <h1>HTML</h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center rounded-2xl shadow-xl  w-[25vw] h-[25vh]">
          <img src={css} alt="" className="w-24" />
          <h1>CSS</h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center rounded-2xl shadow-xl hover:border-2 hover:scale-110 hover:bg-gradient-to-r from-cyan-500 to-blue-500 border-white  w-[25vw] h-[25vh]">
          <img src={html} alt="" className="w-24" />
          <h1>HTML</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
