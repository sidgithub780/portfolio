import React, { useState, useEffect } from "react";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Work from "./Work";
import Contact from "./Contact";

function Home() {
  return (
    <div name="home" className="w-full h-full bg-[#3b3a37]">
      <div className="max-w-[1000px]  mx-auto px-8 flex flex-col justify-center h-full ">
        <Intro />
        <AboutMe />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
