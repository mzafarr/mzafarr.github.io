"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHamburger = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <section className="flex justify-between py-5 pb-14">
      {/* <img src="" alt="logo" /> */}
      <h3 className="text-3xl pl-10 text-slate-700 font-bold">MZ</h3>
      {toggle ? (
        <div className="fixed top-0 left-0 bg-[#c3c3c3] h-screen w-full md:hidden flex justify-center pt-20 items-start text-white text-4xl">
          <ul className="gap-10 flex text-center flex-col text-white">
            <li className="cursor-pointer hover:translate-y-1 duration-300">Home</li>
            <li className="cursor-pointer hover:translate-y-1 duration-300">Skills</li>
            <li className="cursor-pointer hover:translate-y-1 duration-300">Projects</li>
            <li className="cursor-pointer hover:translate-y-1 duration-300">About</li>
            <li>
              <button className="font-bold rounded-lg hover:translate-y-1 hover:bg-slate-600 px-3 py-2 duration-300">Contact Me</button>
            </li>
          </ul>
        </div>
      ) : (
        <ul className="gap-7 hidden md:flex ">
          <li className="cursor-pointer hover:translate-y-1 duration-300 text-2xl">Home</li>
          <li className="cursor-pointer hover:translate-y-1 duration-300 text-2xl">Skills</li>
          <li className="cursor-pointer hover:translate-y-1 duration-300 text-2xl">Projects</li>
          <li className="cursor-pointer hover:translate-y-1 duration-300 text-2xl">About</li>
          <li className="cursor-pointer hover:translate-y-1 duration-300 text-2xl">
            <button>Contact Me</button>
          </li>
        </ul>
      )}
      <div
        onClick={toggleHamburger}
        className={`cursor-pointer z-20 ${toggle && "text-white"}`}
      >
        <div className="md:hidden">
          {toggle ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
        </div>
      </div>
    </section>
  );
};

export default Header;
