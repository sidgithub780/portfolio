import React from "react";

import {
  DiHtml5,
  DiCss3,
  DiPython,
  DiJava,
  DiPostgresql,
  DiReact,
  DiNodejsSmall,
  DiSass,
  DiGithubBadge,
  DiGit,
} from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiTensorflow,
  SiVercel,
  SiSwift,
  SiDart,
  SiPytorch,
} from "react-icons/si";

export default function () {
  return (
    <div>
      <hr className="h-px my-4 bg-yellow-500 border-0" />

      <p className="text-yellow-500 text-5xl font-bold">Skills</p>
      <p className="text-white text-2xl font-bold mt-4">
        Languages I know & use
      </p>

      <div className="flex flex-row mt-4 space-x-5">
        <DiHtml5 className="icon text-white text-4xl md:text-5xl lg:text-6xl" />
        <DiCss3 className="icon text-white text-4xl md:text-5xl lg:text-6xl" />
        <DiPython className="icon text-white text-4xl md:text-5xl lg:text-6xl" />
        <SiJavascript className="icon text-white text-4xl md:text-5xl lg:text-6xl" />
        <SiTypescript className="icon text-white text-4xl md:text-5xl lg:text-6xl" />
        <DiJava className="icon text-white text-4xl md:text-5xl lg:text-6xl" />
        <DiPostgresql className="icon text-white text-4xl md:text-5xl lg:text-6xl" />
      </div>

      <p className="text-white text-2xl font-bold mt-4">
        Services & frameworks I know & use
      </p>

      <div className="flex flex-wrap mt-4 space-x-5">
        <DiReact className="icon text-white text-4xl md:text-6xl lg:text-7xl mb-2 md:mb-0" />
        <DiSass className="icon text-white text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-0" />
        <DiNodejsSmall className="icon text-white text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-0" />
        <SiNextdotjs className="icon text-white text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-0" />
        <SiExpress className="icon text-white text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-0" />
        <SiTailwindcss className="icon text-white text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-0" />
        <DiGit className="icon text-white text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-0" />
        <DiGithubBadge className="icon text-white text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-0" />
        <SiFirebase className="icon text-white text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-0" />
        <SiMongodb className="icon text-white text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-0" />
        <SiTensorflow className="icon text-white text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-0" />
        <SiVercel className="icon text-white text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-0" />
      </div>

      <p className="text-white text-2xl font-bold mt-4">Currently learning</p>

      <div className="flex flex-row mt-4 space-x-4">
        <SiSwift className="icon text-white text-4xl md:text-5xl lg:text-6xl" />
        <SiDart className="icon text-white text-4xl md:text-5xl lg:text-6xl" />
        <SiPytorch className="icon text-white text-4xl md:text-5xl lg:text-6xl" />
      </div>
    </div>
  );
}
