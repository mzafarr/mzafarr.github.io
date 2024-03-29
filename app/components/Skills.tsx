import React from "react";
import css from "../images/css.png";
import html from "../images/html.png";
import js from "../images/js.png";
import ts from "../images/ts.png";
import nextjs from "../images/nextjs.png";
import react from "../images/react.png";
import mongodb from "../images/mongodb.png";
import nodejs from "../images/nodejs.png";
import python from "../images/python.png";
import docker from "../images/docker.png";
import tailwind from "../images/tailwind.png";
import postgres from "../images/postgres.png";
import firebase from "../images/firebase.png";
import mysql from "../images/mysql.png";
import git from "../images/git.png";
import Skill from "./Skill";
import { StaticImageData } from "next/image";

export interface SkillProps {
  name: string;
  image: StaticImageData;
}

const Skills = () => {
  const skills: SkillProps[] = [
    {
      name: "Next.js",
      image: nextjs,
    },
    {
      name: "React.js",
      image: react,
    },
    {
      name: "JavaScript",
      image: js,
    },
    {
      name: "TypeScript",
      image: ts,
    },
    {
      name: "Python",
      image: python,
    },
    {
      name: "mysql",
      image: mysql,
    },
    {
      name: "MongoDB",
      image: mongodb,
    },
    {
      name: "PostgreSQL",
      image: postgres,
    },
    {
      name: "Firebase",
      image: firebase,
    },
    {
      name: "Node.js",
      image: nodejs,
    },
    {
      name: "Docker",
      image: docker,
    },
    {
      name: "HTML",
      image: html,
    },
    {
      name: "CSS",
      image: css,
    },
    {
      name: "Tailwind CSS",
      image: tailwind,
    },
    {
      name: "Git",
      image: git,
    },
  ];

  return (
    <section className="bg-[#eeeeeed0]  -mt-10 pb-14" id="skills">
      <div className="max-w-[620px] flex flex-col items-center mx-auto my-10 ">
        <h2 className="text-5xl pb-3 pt-20 font-semibold">Skills</h2>
        <div className="max-w-[620px] flex flex-wrap justify-center gap-10 py-5">
          {skills.map((skill, index) => (
            <Skill key={index} name={skill.name} image={skill.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
<ul className="gap-7 hidden md:flex scroll-smooth">
<li className="cursor-pointer hover:translate-y-1 duration-300 text-2xl">
  Home
  {/* <Link href="/#home">Home</Link> */}
</li>
<li className="cursor-pointer hover:translate-y-1 duration-300 text-2xl">
  Skills
  {/* <Link href="/#skills">Skills</Link> */}
</li>
<li className="cursor-pointer hover:translate-y-1 duration-300 text-2xl">
  Projects
  {/* <Link href="/#projects">Projects</Link> */}
</li>
<li className="cursor-pointer hover:translate-y-1 duration-300 text-2xl">
  Contact Me
  {/* <Link href="/#contact">Contact Me</Link> */}
</li>
</ul>