import React from "react"
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
      <div className="md:flex md:justify-center md:items-start flex justify-center items-start">
        <div className="md:flex md:flex-col flex flex-col ">
          <div className="font-main font-medium md:mt-[10vw] md:ms-10 md:w-[50vw] md:text-center md:text-2xl mt-16 w-[40vw] ms-12 text-xl text-center ">
            <h1>
              Know Who <span className="text-purple">I'M</span>
            </h1>
          </div>
          <div className="md:w-[45vw] md:mt-[2vw] md:ms-10 text-justify md:text-lg w-[40vw] mt-8 ms-3">
            <p className="">
              👉Hi Everyone, Iam Adithyan, a passionate Full Stack Developer
            </p>
            <p className="py-3">
              👉Iam Currently Pursuing my Bachelor's Degree in Computer Science
              Engineering at Kongu Engineering College
            </p>
            <p>👉I'm interested in learning new technologies and work on it</p>
          </div>
        </div>
        <div className="md:mt-[4vw] mt-[30vh]">
          <img src={about} alt="" className="md:w-[30vw] w-[45vw]" />
        </div>
      </div>

      <div className="md:flex md:justify-center md:items-center md:pt-12 flex justify-center items-center pt-10 ">
        <h1 className="font-main md:text-2xl text-2xl font-semibold">Skills</h1>
      </div>

      <div className="md:pt-5  md:grid md:grid-cols-3 md:gap-14 md:ms-20 md:me-20 md:font-main font-medium pt-5 grid grid-cols-3 gap-5 ms-5 me-5 font-main">
        <div className="md:flex md:flex-col md:gap-4 md:items-center md:justify-center md:rounded-2xl md:shadow-xl  md:w-[25vw] md:h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110 flex flex-col gap-3 items-center justify-center rounded-xl w-[30vw] h-[20vh]">
          <img src={html} alt="" className="w-24 md:w-24"/>
          <h1>HTML</h1>
        </div>
        <div className="md:flex md:flex-col md:gap-4 md:items-center md:justify-center md:rounded-2xl md:shadow-xl  md:w-[25vw] md:h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110 flex flex-col gap-3 items-center justify-center rounded-xl w-[30vw] h-[20vh]">
          <img src={css} alt="" className="w-24 md:w-24" />
          <h1>CSS</h1>
        </div>
        <div className="md:flex md:flex-col md:gap-4 md:items-center md:justify-center md:rounded-2xl md:shadow-xl  md:w-[25vw] md:h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110 flex flex-col gap-3 items-center justify-center rounded-xl w-[30vw] h-[20vh]">
          <img src={react} alt="" className="w-24 md:w-24" />
          <h1>React JS</h1>
        </div>
        <div className="md:flex md:flex-col md:gap-4 md:items-center md:justify-center md:rounded-2xl md:shadow-xl  md:w-[25vw] md:h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110 flex flex-col gap-3 items-center justify-center rounded-xl w-[30vw] h-[20vh]">
          <img src={express} alt="" className="w-24 md:w-24" />
          <h1>Express JS</h1>
        </div>
        <div className="md:flex md:flex-col md:gap-4 md:items-center md:justify-center md:rounded-2xl md:shadow-xl  md:w-[25vw] md:h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110 flex flex-col gap-3 items-center justify-center rounded-xl w-[30vw] h-[20vh]">
          <img src={tail} alt="" className="w-24 md:w-24" />
          <h1>Tailwind CSS</h1>
        </div>
        <div className="md:flex md:flex-col md:gap-4 md:items-center md:justify-center md:rounded-2xl md:shadow-xl  md:w-[25vw] md:h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110 flex flex-col gap-3 items-center justify-center rounded-xl w-[30vw] h-[20vh]">
          <img src={node} alt="" className="w-24 md:w-24" />
          <h1>Node JS</h1>
        </div>
        <div className="md:flex md:flex-col md:gap-4 md:items-center md:justify-center md:rounded-2xl md:shadow-xl  md:w-[25vw] md:h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110 flex flex-col gap-3 items-center justify-center rounded-xl w-[30vw] h-[20vh]">
          <img src={mongodb} alt="" className="w-24 md:w-24" />
          <h1>MongoDB</h1>
        </div>
        <div className="md:flex md:flex-col md:gap-4 md:items-center md:justify-center md:rounded-2xl md:shadow-xl  md:w-[25vw] md:h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110 flex flex-col gap-3 items-center justify-center rounded-xl w-[30vw] h-[20vh]">
          <img src={java} alt="" className="w-24 md:w-24" />
          <h1>Java</h1>
        </div>
        <div className="md:flex md:flex-col md:gap-4 md:items-center md:justify-center md:rounded-2xl md:shadow-xl  md:w-[25vw] md:h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110 flex flex-col gap-3 items-center justify-center rounded-xl w-[30vw] h-[20vh]">
          <img src={postman} alt="" className="w-24 md:w-24" />
          <h1>Postman</h1>
        </div>
        <div className="md:flex md:flex-col md:gap-4 md:items-center md:justify-center md:rounded-2xl md:shadow-xl  md:w-[25vw] md:h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110 flex flex-col gap-3 items-center justify-center rounded-xl w-[30vw] h-[20vh]">
          <img src={js} alt="" className="w-24 md:w-24" />
          <h1>Javascript</h1>
        </div>
        <div className="md:flex md:flex-col md:gap-4 md:items-center md:justify-center md:rounded-2xl md:shadow-xl  md:w-[25vw] md:h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110 flex flex-col gap-3 items-center justify-center rounded-xl w-[30vw] h-[20vh]">
          <img src={git} alt="" className="w-24 md:w-24" />
          <h1>Git</h1>
        </div>
        <div className="md:flex md:flex-col md:gap-4 md:items-center md:justify-center md:rounded-2xl md:shadow-xl  md:w-[25vw] md:h-[25vh] hover:border hover:border-slate-200 hover:ease-in-out duration-300 hover:scale-110 flex flex-col gap-3 items-center justify-center rounded-xl w-[30vw] h-[20vh]">
          <img src={figma} alt="" className="w-24 md:w-24" />
          <h1>Figma</h1>
        </div>
      </div>

      <div className="md:flex md:flex-col md:justify-center md:items-center md:gap-5 md:pt-14 font-main font-semibold md:text-2xl flex flex-col justify-center items-center gap-3 pt-12 text-xl ">
        <h1>Github</h1>
        <div className="md:pt-2 py-2">
          <GitHubCalendar username="Adithyan005" className="w-40"/>
        </div>
      </div>
      
    </div>
  );
};

export default About;
