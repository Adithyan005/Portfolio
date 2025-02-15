import React, { useState } from "react";
import home from "../assets/home.png"
import icon from "../assets/icon.png"
import prog from "../assets/prog2.svg"
import resume from "../assets/resume1.png"
import {Menu, X} from 'lucide-react'

const Navbar = () => {
  const [isopen,setIsopen] = useState(false)

  return (
    <div>
      <div className="md:text-white md:flex md:justify-between md:items-center md:pt-6 md:ms-[10vw] md:me-[6vw] text-white flex justify-between items-center pt-6 ms-[10vw] me-[6vw]">
        <div className="flex items-baseline gap-1">
          <h1 className="font-bold text-4xl">A</h1>
          <h1 className="font-bold text-2xl">M</h1>
        </div>
        <div className="md:flex md:justify-center md:gap-10 md:items-center md:text-xl flex justify-center items-center gap-5 text-xl">
          <div className="md:flex md:items-center md:gap-2 md:font-style flex items-center gap-1 font-style">
            <img src={home} alt="" className="md:w-5 w-7"/>
            <a href="" className="">Home</a>
          </div>
          <div className="md:flex md:items-center md:gap-2 md:font-style flex items-center gap-2 font-style">
            <img src={icon} alt="" className="md:w-6 w-7"/>
            <a href="" className="">About</a>
          </div>
          <div className="md:flex md:items-center md:gap-2 md:font-style flex items-center gap-2 font-style">
            <img src={prog} alt="" className="md:w-7 w-7"/>
            <a href="" className="">Projects</a>
          </div>
          <div className="md:flex md:items-center md:gap-2 md:font-style flex items-center gap-2 font-style">
            <img src={resume} alt="" className="md:w-5 w-7"/>
            <a href="" className="">Resume</a>
          </div>
          <div className="md:hidden">
            <button onClick={()=>setIsopen(!isopen)}> {isopen ? <X size={30}/> : <Menu size={30}/>}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
