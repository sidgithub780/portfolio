import React from "react";
import IndividualProject from "./IndividualProject";

import TFTIpic from "../assets/tfti_logo.png";
import melanomorelogo from "../assets/melanomorelogo.png";

export default function Projects() {
  return (
    <div className="mt-4">
      <p className="text-yellow-500 text-3xl font-bold">Projects</p>

      <IndividualProject
        name="TFTI"
        subtitle="Sleek event management system"
        coverImage={TFTIpic}
        link="https://github.com/sidgithub780/rsvper"
        demo="https://youtu.be/YY2IEuKwg0w"
        devpost={null}
      />
      <IndividualProject
        name="Melanomore"
        subtitle="Melanoma detection"
        coverImage={melanomorelogo}
        link="https://github.com/sidgithub780/melanomore"
        demo="https://youtu.be/jP2KgZb76sA"
        devpost={null}
      />

      <IndividualProject
        name="Portfolio website"
        subtitle="The website you're seeing"
        coverImage={null}
        link="https://github.com/sidgithub780/portfolio"
        demo={null}
        devpost={null}
      />
    </div>
  );
}
