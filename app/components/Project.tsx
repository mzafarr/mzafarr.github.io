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
      className={`flex gap-5 lg:gap-10 md:flex-reverse max-w-4xl m-16 ${
        side === 1 && "flex-row-reverse"
      }`}
    >
      <div className="flex flex-col justify-between flex-1 text-xl">
        <div>
          <h2 className="text-3xl font-semibold mb-3">{heading}</h2>
          <p className="text-lg text-justify ">{desc}</p>
        </div>
        <div className="flex flex-col w-full">
          <button className="px-6 py-3 text-center bg-violet-700 hover:bg-violet-600 text-white mt-5  mb-1.5 ml-0 rounded-lg">
            <a href={link}>View Project</a>
          </button>
          <button className="px-6 py-3 text-center bg-slate-700 hover:bg-slate-600 text-white  mt-2 rounded-lg">
            <a href={code}>Source Code</a>
          </button>
        </div>
      </div>
      <div className="flex-1">
        <Image src={snapshot} alt={heading} height={450} />
      </div>
    </div>
  );
};

export default Project;
