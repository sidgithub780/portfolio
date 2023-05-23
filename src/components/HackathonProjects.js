import React from "react";
import IndividualProject from "./IndividualProject";

import Memgen from "../assets/Memgen.jpg";
import Tablify4 from "../assets/Tablify4.png";

export default function HackathonProjects() {
  return (
    <div className="mt-4">
      <p className="text-yellow-500 text-3xl font-bold">Hackathons</p>

      <IndividualProject
        name="MemGen"
        subtitle="Intelligent Vector-Based Cover Letter Creator"
        coverImage={Memgen}
        link="https://github.com/IdkwhatImD0ing/MemGen"
        demo="https://youtu.be/v5PAwb0BYtw"
        hackathon="LA Hacks 2023"
        devpost="https://devpost.com/software/memgen-focused-memory-gpt"
      />
      <IndividualProject
        name="Tablify"
        subtitle="AI-powered tab manager"
        coverImage={Tablify4}
        link="https://github.com/aryanm5/tablify"
        demo="https://youtu.be/6t5jaXjK4tY"
        hackathon="SB Hacks 2023"
        devpost="https://devpost.com/software/tablify-v1562o"
        placement="Overall #1 Winner 🥇"
      />
    </div>
  );
}
