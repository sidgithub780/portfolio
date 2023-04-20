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
      <hr class="h-px my-4 bg-yellow-500 border-0"></hr>

      <p className="text-yellow-500 text-5xl font-bold">Skills</p>
      <p className="text-white text-2xl font-bold mt-4">
        Languages I know & use
      </p>

      <div className="flex flex-row mt-4 space-x-5">
        <DiHtml5 size="50" style={{ color: "white" }} />
        <DiCss3 size="50" style={{ color: "white" }} />
        <DiPython size="50" style={{ color: "white" }} />
        <SiJavascript size="50" style={{ color: "white" }} />
        <SiTypescript size="50" style={{ color: "white" }} />
        <DiJava size="50" style={{ color: "white" }} />
        <DiPostgresql size="50" style={{ color: "white" }} />
      </div>
      <p className="text-white text-2xl font-bold mt-4">
        Services & frameworks I know & use
      </p>
      <div className="flex flex-row mt-4 space-x-5">
        <DiReact size="50" style={{ color: "white" }} />
        <DiSass size="50" style={{ color: "white" }} />
        <DiNodejsSmall size="50" style={{ color: "white" }} />
        <SiNextdotjs size="50" style={{ color: "white" }} />
        <SiExpress size="50" style={{ color: "white" }} />
        <SiTailwindcss size="50" style={{ color: "white" }} />
        <DiGit size="50" style={{ color: "white" }} />
        <DiGithubBadge size="50" style={{ color: "white" }} />
        <SiFirebase size="50" style={{ color: "white" }} />
        <SiMongodb size="50" style={{ color: "white" }} />
        <SiTensorflow size="50" style={{ color: "white" }} />
        <SiVercel size="50" style={{ color: "white" }} />
      </div>
      <p className="text-white text-2xl font-bold mt-4">Currently learning</p>
      <div className="flex flex-row mt-4 space-x-4">
        <SiSwift size="50" style={{ color: "white" }} />
        <SiDart size="50" style={{ color: "white" }} />
        <SiPytorch size="50" style={{ color: "white" }} />
      </div>
    </div>
  );
}
