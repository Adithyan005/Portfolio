import React from "react";
import { Typewriter } from "react-simple-typewriter";
import home from "../assets/home1.png"
import profile from "../assets/profile.png";
import linked from "../assets/linked2.png"
import github from "../assets/github2.png"

const Home = () => {
  return (
    <div className="text-white">
      <div className="md:flex md:justify-between md:items-center md:mt-[10vh] md:ms-[8rem] md:me-[8rem] flex justify-between items-center mt-[25vh] ms-4 me-4">
        <div>
          <div className="">
            <h1 className="font-style text-2xl md:text-4xl">Hi There! 👋</h1>
          </div>
          <div className="md:mt-3 font-style md:text-5xl mt-5 text-2xl">
            <h1>
              I'M <span className="text-purple font-medium">ADITHYAN</span>
            </h1>
          </div>
          <div className="md:mt-[7vh] md:text-3xl font-style font-medium mt-5 text-lg">
            <Typewriter
              words={["Full Stack Developer..."]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
        </div>

        <div className="">
          <img src={home} alt="" className="md:w-[60vh] w-[40vw]"/>
        </div>
      </div>
      
      <div className="md:flex md:justify-between md:items-center md:mt-[15vh] md:mb-[25vh] flex justify-between items-center mt-10 mb-10">
        <div className="">
          <div className="md:text-center md:py-10 py-6 text-center">
            <h1 className="font-style md:text-4xl text-xl font-medium">
              LET ME <span className="text-purple font-semibold">INTRODUCE</span> MYSELF
            </h1>
          </div>
          <div className="md:ms-[8rem] md:flex md:flex-col md:space-y-5 font-main md:text-lg md:font-semibold md:text-justify ms-6 flex flex-col space-y-3 text-md font-semibold text-justify">
            <p>🌟Hai Everyone, I'm Adithyan from Salem, Tamil Nadu</p>
            <p>
            🌟My Fields of interest are {" "}
              <span className="text-purple">Mern Stack Development</span> and
              also in <span>UI/UX Design</span>
            </p>
            <p>
            🌟I like building modern, scalable web applications using{" "}
              <span className="text-purple">React.js </span>
              and <span className="text-purple">Express.js</span>, blending
              functionality with sleek design.
            </p>
          </div>
        </div>
        <div className="md:me-[10rem] me-2">
          <img src={profile} alt="" className="md:w-[30vw] w-[140vw]" />
        </div>
      </div>
      <div>
        <div>
          <h1 className="font-style font-medium text-center md:text-4xl text-2xl">FIND ME ON</h1>
        </div>
        <div className="flex justify-center items-center py-2 gap-4">
          <a href="https://www.linkedin.com/in/adithyan-m-469569259/"><img src={linked} alt="" className="w-12"/></a>
          <a href="https://github.com/Adithyan005"><img src={github} alt="" className="w-12"/></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
