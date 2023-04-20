import React from "react";
import IndividualProject from "./IndividualProject";
import promPic from "../assets/croppedprompic.jpg";
import TFTIpic from "../assets/tfti_logo.png";
import melanomorelogo from "../assets/melanomorelogo.png";

export default function Projects() {
  return (
    <div className="mt-4">
      <p className="text-yellow-500 text-3xl font-bold">Projects</p>
      <div className="flex flex-row space-x-8">
        <IndividualProject
          name="TFTI"
          subtitle="Sleek event management system"
          coverImage={TFTIpic}
          link="https://github.com/sidgithub780/rsvper"
          demo="https://youtu.be/YY2IEuKwg0w"
        />
        <IndividualProject
          name="Melanomore"
          subtitle="Melanoma detection"
          coverImage={melanomorelogo}
          link="https://github.com/sidgithub780/melanomore"
          demo="https://youtu.be/jP2KgZb76sA"
        />
      </div>
      <div className="flex flex-row space-x-8">
        <IndividualProject
          name="Foody"
          subtitle="Find food quick"
          coverImage={null}
          link="https://github.com/sidgithub780/food"
          demo="https://drive.google.com/file/d/1gr9tuH7WsLm1cd9L31yPIWXrsC6Zvcxr/view?usp=sharing"
        />
        <IndividualProject
          name="EarTime"
          subtitle="Mini soundboard"
          coverImage={null}
          link="https://github.com/sidgithub780/EarTime"
          demo={null}
        />
      </div>
    </div>
  );
}
