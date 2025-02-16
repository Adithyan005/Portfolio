import React, { useState } from "react";
import home from "../assets/home.png";
import icon from "../assets/icon.png";
import prog from "../assets/prog2.svg";
import resume from "../assets/resume1.png";
import { IoClose, IoOpen } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
  const [isopen, setIsopen] = useState(false);

  const togglemenu = () => {
    setIsopen(!isopen);
  };
  return (
    <div>
      <div className="md:text-white md:flex md:justify-between md:items-center md:pt-6 md:ms-[10vw] md:me-[10vw] text-white flex justify-between items-center pt-6 ms-[10vw] me-[6vw]">
        <div className="md:flex md:items-baseline md:gap-1 flex items-baseline gap-2">
          <h1 className="font-bold text-4xl md:font-bold md:text-4xl">A</h1>
          <h1 className="font-bold text-2xl md:font-bold md:text-2xl">M</h1>
        </div>
        <div className="hidden md:flex justify-center items-center gap-9 text-xl">
          <div className="md:flex md:items-center md:gap-2 md:font-style flex items-center gap-1 font-style">
            <img src={home} alt="" className="md:w-5 w-7" />
            <a href="" className="">
              Home
            </a>
          </div>
          <div className="md:flex md:items-center md:gap-2 md:font-style flex items-center gap-2 font-style">
            <img src={icon} alt="" className="md:w-6 w-7" />
            <a href="" className="">
              About
            </a>
          </div>
          <div className="md:flex md:items-center md:gap-2 md:font-style flex items-center gap-2 font-style">
            <img src={prog} alt="" className="md:w-7 w-7" />
            <a href="" className="">
              Projects
            </a>
          </div>
          <div className="md:flex md:items-center md:gap-2 md:font-style flex items-center gap-2 font-style">
            <img src={resume} alt="" className="md:w-5 w-7" />
            <a href="" className="">
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="text-xl md:hidden flex items-center">
          <button onClick={togglemenu}>
            {isopen ? <IoClose size={35} /> : <IoMdMenu size={35} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isopen && (
          <div className="md:hidden absolute top-[11vh] right-[13vh] w-48 text-xl text-white shadow-lg rounded-lg">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <div className="flex items-center justify-center">
              <img src={home} alt="" className="w-6" />
              <li className="w-full text-center">
                <a
                  href="#"
                  className="block px-4 py-2  rounded-md w-full"
                >
                  Home
                </a>
              </li>
              </div>
              <div className="flex items-center justify-center">
              <img src={icon} alt="" className="w-7" />
              <li className="w-full text-center">
                <a
                  href="#"
                  className="block px-4 py-2 rounded-md w-full"
                >
                  About
                </a>
              </li>
              </div>
              <div className="flex items-center justify-center">
              <img src={prog} alt="" className="w-7" />
              <li className="w-full text-center">
                <a
                  href="#"
                  className="block px-4 py-2  rounded-md w-full"
                >
                  Projects
                </a>
              </li>
              </div>
              <div className="flex items-center justify-center">
              <img src={resume} alt="" className="w-7" />
              <li className="w-full text-center">
                <a
                  href="#"
                  className="block px-4 py-2 rounded-md w-full"
                >
                  Resume
                </a>
              </li>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default Navbar;
