import React from "react";
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {
  return (
    <div className="text-white">
      <div>
        <div className="mt-[25vh] ms-[13rem]">
          <h1 className="font-style text-4xl">Hi There! 👋</h1>
        </div>
        <div className="mt-[5vh] ms-[13rem] font-style text-5xl">
          <h1>
            I'M <span className="text-purple font-medium">ADITHYAN</span>
          </h1>
        </div>
        <div className="mt-[9vh] ms-[13rem] text-2xl">
          <Typewriter
            words={["Mern Stack Developer..."]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
