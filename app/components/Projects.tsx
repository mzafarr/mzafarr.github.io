import React from "react";
import Project from "./Project";
import chatbot from "../images/chatbot.gif";
import passwordManager from "../images/passwordManager.gif";
import { StaticImageData } from "next/image";

interface IProject {
  heading: string;
  desc: string;
  snapshot: StaticImageData;
  link: string;
  code: string;
  side: number;
}
const Projects = () => {
  const obj: IProject[] = [
    {
      heading: "Password Manager Website",
      snapshot: passwordManager,
      desc: "Password Manager Web App built with MERN stack. Users can create their accounts. I have implemented JSON Web Tokens (JWT) for user authentication, ensuring enhanced security with encrypted password storage.",
      link: "google.com",
      code: "github.com",
      side: 1,
    },
    {
      heading: "Custom Ecommerce Chatbot",
      snapshot: chatbot,
      desc: "Built an advanced chatbot application for an ecommerce store leveraging the GPT API. Engineered custom prompts to enhance conversational abilities and provide tailored product recommendations",
      link: "google.com",
      code: "github.com",
      side: 0,
    },
  ];
  return (
    <section id="projects" className="px-4 mx-auto flex flex-col justify-center items-center bg-[#eae8e8dc] py-14">
      <h2 className="text-5xl pb-3 font-semibold">Projects</h2>
      <div>
        {obj.map((item, index) => (
          <Project
            key={index}
            heading={item.heading}
            desc={item.desc}
            snapshot={item.snapshot}
            link={item.link}
            code={item.code}
            side={item.side}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
