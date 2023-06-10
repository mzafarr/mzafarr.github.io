"use client";
import React from "react";
import homePoster from "../images/hero-section.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "./Header";
const HomeHero = () => {
  return (
    <div className="landing-page z-1 w-screen p-0 m-0 bg-white" id="home">
      <Header />
      <section className="flex items-center mx-auto flex-col lg:flex-row max-w-4xl ">
        <div>
          <h1 className="text-4xl">Hey, I&apos;m Muhammad Zafar 👋</h1>
          <p className="py-5 text-xl text-slate-700">
            I&apos;m a Full Stack Web Developer and an undergraduate student of
            Computer Science. As a developer I take on several different
            projects creating mostly web applications.{" "}
          </p>
          <div className="pb-5  my-2">
            <button className="rounded-lg border-2 border-slate-700 bg-slate-700 py-2 px-5  text-white font-medium  text-lg hover:scale-105 hover:shadow-lg duration-300">
              Download CV
            </button>
            <button className="rounded-lg border-2 border-slate-700 py-2 px-5 ms-3  text-black font-medium  text-lg hover:bg-slate-700 hover:text-white hover:scale-105 hover:shadow-lg  duration-300">
              Let&apos;s connect
            </button>
          </div>
        </div>

        <motion.div
          whileHover={{ x: 10 }}
          transition={{ duration: 0.5 }}
          className="w-3/5 md:w-1/2 lg:w-full opacity-80"
        >
          <Image src={homePoster} alt="home page image" />
        </motion.div>
      </section>
    </div>
  );
};

export default HomeHero;
