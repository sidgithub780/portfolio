import React from "react";
import ResearchComponent from "./ResearchComponent";
import capstone from "../assets/capstone.pdf";

export default function Education() {
  return (
    <div>
      <hr class="h-px my-4 bg-yellow-500 border-0"></hr>

      <p className="text-yellow-500 text-5xl font-bold">Education</p>
      <ResearchComponent
        title="Advanced Placement"
        description="AP Computer Science A, AP Computer Science Principles, AP Physics 1, AP US History, AP Calculus BC, AP Biology, AP Statistics, AP US Government"
        school="Northwood High School, Irvine, CA"
        abstractLink={null}
        codeLink={null}
      />
      <ResearchComponent
        title="Physics 77: Introduction to Computational Physics"
        description="Introductory scientific programming in Python with examples from physics. Topics include: visualization, statistics and probability, regression, numerical integration, simulation, data modeling, function approximation, and algebraic systems. Recommended for freshman physics majors."
        school="UC Berkeley Summer Session"
        abstractLink={capstone}
        codeLink="https://github.com/sidgithub780/Physics-77"
      />
      <ResearchComponent
        title="CS 18000: Object Oriented Programming I"
        description="This course covers problem-solving, algorithm implementation in a high-level language, using conditionals and loops, debugging, data collections, search and sort methods, problem decomposition, object-oriented programming, subclassing, handling exceptions, creating GUIs, file data manipulation, abstract data types, and glimpses of other CS topics."
        school="Purdue University"
      />
    </div>
  );
}
