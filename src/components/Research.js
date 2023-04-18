import React from "react";
import SMILEAbstract from "../assets/SMILEAbstract.pdf";

export default function Research() {
  return (
    <div className="mt-4">
      <p className="text-yellow-500 text-3xl font-bold">Research Works</p>
      <p className="text-white text-2xl font-bold mt-4">
        SMILE: Smartphone-based Isolation Analysis for Older Adults
      </p>
      <p className="text-white mt-2">
        Siddhanth Kumar (Northwood High School), Raghav Mehrotra-Venkat
        (University High School), Subhash Prasad (subhash.j.prasad@gmail.com),
        Rithwik Kerur (UC Irvine)
      </p>
      <p className="text-white mt-2">
        (ICDE) 2023 39th IEEE International Conference on Data Engineering
      </p>
      <p className="text-white mt-2">
        <a
          href={SMILEAbstract}
          target="_blank"
          rel="noreferrer"
          className="text-yellow-500"
        >
          Abstract
        </a>{" "}
        •{" "}
        <a
          className="text-yellow-500"
          href="https://github.com/sidgithub780/updated-mha-tester"
          target="_blank"
          rel="noreferrer"
        >
          Code
        </a>
      </p>
    </div>
  );
}
