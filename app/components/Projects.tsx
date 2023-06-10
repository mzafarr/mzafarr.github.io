import React from "react";
import Project from "./Project";
import chatbot from "../images/chatbot.gif";
import chatapp from "../images/chatapp.gif";
import tesla from "../images/tesla.gif";
import passwordManager from "../images/pw.gif";
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
      desc: "Password Manager Web App built with MERN stack. Users can create their accounts. I have implemented JSON Web Tokens for user authentication, ensuring enhanced security with encrypted password storage.",
      code: "https://github.com/mzafarr/PasswordMangerFront",
      link: "https://password-manger-front.vercel.app/",
      side: 1,
    },
    {
      heading: "Chat Application",
      snapshot: chatapp,
      desc: "Built a real-time chat app using Next.js and firebase. Integrated Firebase Authentication for secure user authentication.",
      code: "https://github.com/mzafarr/chat-app",
      link: "https://chat-app-wheat-beta.vercel.app/",
      side: 0,
    },
    {
      heading: "Custom Ecommerce Chatbot",
      snapshot: chatbot,
      desc: "Built an advanced chatbot application for an ecommerce store leveraging the GPT API. Engineered custom prompts to enhance conversational abilities and provide tailored product recommendations",
      code: "https://github.com/mzafarr/CustomerSupport-Chatbot",
      link: "https://customer-support-chatbot-flax.vercel.app/",
      side: 1,
    },
    {
      heading: "Tesla Landing Page",
      snapshot: tesla,
      desc: "Built Tesla's landing page using React.js and styled components library and added animations for a responsive and beautiful design.",
      code: "",
      link: "https://zafars-tesla-clone.netlify.app/",
      side: 0,
    },
  ];
  return (
    <section
      id="projects"
      className="px-4 mx-auto flex flex-col justify-center items-center bg-[#eae8e8dc] py-14"
    >
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
