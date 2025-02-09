import React from "react";
import home from "../assets/home.png"
import icon from "../assets/icon.png"
import prog from "../assets/prog2.svg"
import resume from "../assets/resume1.png"

const Navbar = () => {
  return (
    <div>
      <div className="text-white flex justify-between items-center pt-6 ms-[10vw] me-[6vw]">
        <div className="flex items-baseline gap-1">
          <h1 className="font-bold text-4xl">A</h1>
          <h1 className="font-bold text-2xl">M</h1>
        </div>
        <div className="flex justify-center gap-10 items-center text-xl">
          <div className="flex items-center gap-2 font-style">
            <img src={home} alt="" className="w-5"/>
            <a href="" className="">Home</a>
          </div>
          <div className="flex items-center gap-2 font-style">
            <img src={icon} alt="" className="w-6"/>
            <a href="" className="">About</a>
          </div>
          <div className="flex items-center gap-2 font-style">
            <img src={prog} alt="" className="w-7"/>
            <a href="" className="">Projects</a>
          </div>
          <div className="flex items-center gap-2 font-style">
            <img src={resume} alt="" className="w-5"/>
            <a href="" className="">Resume</a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
