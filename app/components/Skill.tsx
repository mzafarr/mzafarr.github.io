import Image, { StaticImageData } from "next/image";
import React from "react";
import { SkillProps } from "./Skills";

const Skill = ({ name, image }: SkillProps) => {
  return (
    <div className="cursor-pointer w-[70px] md:w-[90px] justify-center flex flex-col items-center">
      <div className="hover:-translate-y-1.5 duration-300">
        <Image width="50" height="50" src={image} alt="git" />
      </div>
      <p className="text-center">{name}</p>
    </div>
  );
};

export default Skill;
