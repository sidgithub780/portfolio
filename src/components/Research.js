import React from "react";
import SMILEAbstract from "../assets/SMILEAbstract.pdf";
import ResearchComponent from "./ResearchComponent";

export default function Research() {
  return (
    <div className="mt-4">
      <p className="text-yellow-500 text-3xl font-bold">Research Works</p>
      <ResearchComponent
        title="SMILE: Smartphone-based Isolation Analysis for Older Adults"
        description="Siddhanth Kumar (Northwood High School), Raghav Mehrotra-Venkat
        (University High School), Subhash Prasad (subhash.j.prasad@gmail.com),
        Rithwik Kerur (UC Irvine)"
        school="(ICDE) 2023 39th IEEE International Conference on Data Engineering"
        abstractLink={SMILEAbstract}
        codeLink="https://github.com/sidgithub780/updated-mha-tester"
      />
    </div>
  );
}
