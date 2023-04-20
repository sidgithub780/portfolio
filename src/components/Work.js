import React from "react";
import Research from "./Research";
import Projects from "./Projects";

export default function Work() {
  return (
    <div>
      <hr class="h-px my-4 bg-yellow-500 border-0"></hr>
      <div>
        <p className="text-yellow-500 text-5xl font-bold">Work</p>
        <p className="text-white text-xl mt-4">
          I enjoy doing research alongside practical coding projects.
        </p>
      </div>
      <Research />
      <Projects />
    </div>
  );
}
