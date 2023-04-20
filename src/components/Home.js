import React, { useRef } from "react";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Work from "./Work";
import Skills from "./Skills";
import Education from "./Education";

function Home() {
  const scrollToSkills = useRef();
  const scrollToWork = useRef();
  const scrollToAbout = useRef();
  const scrollToEducation = useRef();

  return (
    <>
      <div className="fixed w-full h-20 flex justify-between items-center px-4 text-lg bg-[#3b3a37]">
        <div className="flex text-yellow-500 font-bold text-2xl">SKUMAR.</div>
        <div>
          <ul className="flex text-white">
            <button
              onClick={() =>
                scrollToAbout.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <li className="transition hover:text-yellow-500">About Me</li>
            </button>
            <button
              onClick={() =>
                scrollToWork.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <li className="transition hover:text-yellow-500">Work</li>
            </button>
            <button
              onClick={() =>
                scrollToEducation.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <li className="transition hover:text-yellow-500">Education</li>
            </button>
            <button
              onClick={() =>
                scrollToSkills.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <li className="transition hover:text-yellow-500">Skills</li>
            </button>
          </ul>
        </div>
      </div>
      <div name="home" className="w-full h-full bg-[#3b3a37]">
        <div className="max-w-[1000px]  mx-auto px-8 flex flex-col justify-center h-full ">
          <Intro />
          <div ref={scrollToAbout}>
            <AboutMe />
          </div>
          <div ref={scrollToWork}>
            <Work />
          </div>
          <div ref={scrollToEducation}>
            <Education />
          </div>
          <div ref={scrollToSkills}>
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
