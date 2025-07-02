import React from "react";
import about from "../assets/about6.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import express from "../assets/express-js.png";
import tail from "../assets/tail.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import java from "../assets/java.png";
import postman from "../assets/postman.png";
import js from "../assets/js.png";
import git from "../assets/git-1.png";
import figma from "../assets/figma.png";
import GitHubCalendar from "react-github-calendar";

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

      <div className="pt-5  grid grid-cols-3 gap-14 ms-20 me-20 font-main font-medium">
        <div className="flex flex-col gap-4 items-center justify-center rounded-2xl shadow-xl  w-[25vw] h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110">
          <img src={html} alt="" className="w-24" />
          <h1>HTML</h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center rounded-2xl shadow-xl  w-[25vw] h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110">
          <img src={css} alt="" className="w-24" />
          <h1>CSS</h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center rounded-2xl shadow-xl   w-[25vw] h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110">
          <img src={react} alt="" className="w-24" />
          <h1>React JS</h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center rounded-2xl shadow-xl   w-[25vw] h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110">
          <img src={express} alt="" className="w-24" />
          <h1>Express JS</h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center rounded-2xl shadow-xl   w-[25vw] h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110">
          <img src={tail} alt="" className="w-24" />
          <h1>Tailwind CSS</h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center rounded-2xl shadow-xl   w-[25vw] h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110">
          <img src={node} alt="" className="w-24" />
          <h1>Node JS</h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center rounded-2xl shadow-xl   w-[25vw] h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110">
          <img src={mongodb} alt="" className="w-24" />
          <h1>MongoDB</h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center rounded-2xl shadow-xl   w-[25vw] h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110">
          <img src={java} alt="" className="w-24" />
          <h1>Java</h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center rounded-2xl shadow-xl   w-[25vw] h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110">
          <img src={postman} alt="" className="w-24" />
          <h1>Postman</h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center rounded-2xl shadow-xl   w-[25vw] h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110">
          <img src={js} alt="" className="w-24" />
          <h1>Javascript</h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center rounded-2xl shadow-xl   w-[25vw] h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110">
          <img src={git} alt="" className="w-24" />
          <h1>Git</h1>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center rounded-2xl shadow-xl   w-[25vw] h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110">
          <img src={figma} alt="" className="w-24" />
          <h1>Figma</h1>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 pt-14 font-main font-semibold text-2xl">
        <h1>Github</h1>
        <div className="pt-2">
          <GitHubCalendar username="Adithyan005"/>
        </div>
      </div>
      
    </div>
  );
};

export default About;
