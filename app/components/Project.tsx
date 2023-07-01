import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
interface IProject {
  heading: string;
  desc: string;
  snapshot: StaticImageData;
  link: string;
  code: string;
  side: number;
}
const Project: FC<IProject> = ({
  heading,
  desc,
  snapshot,
  link,
  code,
  side,
}) => {
  return (
    <div
      className={`flex gap-5 lg:gap-10 flex-col-reverse md:flex-row max-w-4xl mx-2 my-20 ${
        side === 1 && "flex-col md:flex-row-reverse"
      }`}
    >
      <div className="flex flex-col justify-between flex-1 text-xl">
        <div>
          <h2 className="text-3xl font-semibold mb-3">{heading}</h2>
          <p className="text-lg ">{desc}</p>
        </div>
        <div className="flex flex-col w-full">
          <a
            target="_blank"
            className="text-decoration-none px-6 py-3 mb-1.5 ml-0 "
            href={link}
          >
            <button className="px-6 py-3 text-center w-full bg-violet-700 hover:bg-violet-600 text-white mt-5 rounded-lg">
              View Project
            </button>
          </a>
          <a
            target="_blank"
            className="text-decoration-none"
            href={code}
          >
            <button className="px-6 py-3 text-center w-full bg-slate-700 hover:bg-slate-600 text-white  mt-2 rounded-lg">
              Source Code
            </button>
          </a>
        </div>
      </div>
      <div className="flex-1 mx-auto">
        <Image src={snapshot} alt={heading} />
      </div>
    </div>
  );
};

export default Project;
