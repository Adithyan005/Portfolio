import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/profile.png";

const Home = () => {
  return (
    <div className="text-white">
      <div className="flex justify-between items-center mt-[25vh] ms-[10rem] me-[10rem]">
        <div>
          <div className="">
            <h1 className="font-style text-4xl">Hi There! 👋</h1>
          </div>
          <div className="mt-[3vh]  font-style text-5xl">
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

        </div>
      </div>
    </div>
  );
};

export default Home;
