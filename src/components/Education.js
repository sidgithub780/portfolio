import React from "react";
import ResearchComponent from "./ResearchComponent";

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
        school="UC Berkeley"
        abstractLink={null}
        codeLink="https://github.com/sidgithub780/Physics-77"
      />
    </div>
  );
}
