"use client";
import React from "react";
import homePoster from "../images/hero-section.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "./Header";
const HomeHero = () => {
  return (
    <div className="landing-page z-1 w-screen bg-white" id="home">
      <Header />
      <section className="flex px-8 lg:px-0 items-center justify-center sm:pt-20 mx-auto flex-col md:flex-row max-w-4xl ">
        <div className="max-w-[600px]">
          <div>
            <h1 className="text-4xl">Hey, I&apos;m Muhammad Zafar 👋</h1>
            <p className="py-5 text-xl text-slate-700">
              Passionate Full Stack Web Developer with expertise in MERN stack
              and Next.js. I have worked on various web applications and
              technologies. Seeking internship opportunities to contribute,
              learn, and connect with like-minded professionals. Let's
              collaborate and make an impact together!
            </p>
          </div>
          <div className="pb-5 my-2">
            <button className="rounded-lg border-2 border-slate-700 bg-slate-700 py-2 px-5  text-white font-medium  text-lg hover:scale-105 hover:shadow-lg duration-300">
              <a href="/resume.pdf" download>
                Download CV
              </a>
            </button>
            <button className="rounded-lg border-2 border-slate-700 py-2 px-5 ms-3  text-black font-medium  text-lg hover:bg-violet-600 hover:border-violet-600 hover:text-white  hover:shadow-lg  duration-200">
              <a href="https://linkedin.com/in/zafarr" target="_blank"> Let&apos;s connect</a>
            </button>
          </div>
        </div>

        <motion.div
          whileHover={{ x: 10 }}
          transition={{ duration: 0.5 }}
          className="w-3/5 md:w-1/2 lg:w-full opacity-85 hidden md:block"
        >
          <Image src={homePoster} alt="home page image" />
        </motion.div>
      </section>
    </div>
  );
};

export default HomeHero;
