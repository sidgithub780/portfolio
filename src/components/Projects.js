import React from "react";
import IndividualProject from "./IndividualProject";
import promPic from "../assets/croppedprompic.jpg";

export default function Projects() {
  return (
    <div className="mt-4">
      <p className="text-yellow-500 text-3xl font-bold">Projects</p>
      <div className="flex flex-row space-x-8">
        <IndividualProject
          name="TFTI"
          description="cripapp"
          subtitle="social connection"
          coverImage={promPic}
        />
        <IndividualProject
          name="TFTI"
          description="cripapp"
          subtitle="lol"
          coverImage={promPic}
        />
      </div>
    </div>
  );
}
