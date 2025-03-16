import React from "react";
import { Typewriter } from "react-simple-typewriter";
import home from "../assets/home1.png"
import profile from "../assets/profile.png";

const Home = () => {
  return (
    <div className="text-white">
      <div className="flex justify-between items-center mt-[10vh] ms-[8rem] me-[8rem]">
        <div>
          <div className="">
            <h1 className="font-style text-4xl">Hi There! 👋</h1>
          </div>
          <div className="mt-3 font-style text-5xl">
            <h1>
              I'M <span className="text-purple font-medium">ADITHYAN</span>
            </h1>
          </div>
          <div className="mt-[7vh]  text-3xl font-style font-medium">
            <Typewriter
              words={["MERN Stack Developer..."]}
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
          <img src={home} alt="" className="w-[60vh]"/>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-[20vh] mb-[25vh]">
        <div className="">
          <div className="text-center py-10">
            <h1 className="font-style text-4xl font-medium">
              LET ME <span className="text-purple font-semibold">INTRODUCE</span> MYSELF
            </h1>
          </div>
          <div className="ms-[8rem] flex flex-col space-y-5 font-main text-lg font-semibold text-justify">
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
        <div className="me-[10rem]">
          <img src={profile} alt="" className="w-[30vw]" />
        </div>
      </div>
      <div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
