import React, { useState, useRef } from "react";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Work from "./Work";
import Skills from "./Skills";
import Education from "./Education";
import resume from "../assets/sksweresume_v3.pdf";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    toggleMenu();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSkills = useRef();
  const scrollToWork = useRef();
  const scrollToAbout = useRef();
  const scrollToEducation = useRef();

  return (
    <>
      <div className="fixed top-0 right-0 w-full h-20 px-4 text-lg bg-[#3b3a37]">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center text-yellow-500 font-bold text-2xl">
            SKUMAR.
          </div>
          <div className="hidden md:flex">
            <ul className="flex text-white">
              <button onClick={() => scrollToSection(scrollToAbout)}>
                <li className="transition hover:text-yellow-500">About Me</li>
              </button>

              <button onClick={() => scrollToSection(scrollToWork)}>
                <li className="transition hover:text-yellow-500">Work</li>
              </button>
              <button onClick={() => scrollToSection(scrollToEducation)}>
                <li className="transition hover:text-yellow-500">Education</li>
              </button>
              <button onClick={() => scrollToSection(scrollToSkills)}>
                <li className="transition hover:text-yellow-500">Skills</li>
              </button>

              <li className="transition hover:text-yellow-500">
                <a
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yellow-500"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <button
            className={`md:hidden text-white focus:outline-none ${
              isMenuOpen ? "bg-yellow-500" : ""
            }`}
            onClick={toggleMenu}
          >
            <svg
              className={`w-6 h-6 fill-current ${
                isMenuOpen ? "text-white" : "text-yellow-500"
              }`}
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 7H5V5H19V7ZM19 12H5V10H19V12ZM19 17H5V15H19V17Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 7H20V9H4V7ZM4 12H20V14H4V12ZM4 17H20V19H4V17Z"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:hidden flex-col bg-[#3b3a37] rounded-lg top-20`}
          ref={menuRef}
        >
          <button
            className="block py-2 px-4 text-white transition hover:text-yellow-500"
            onClick={() => scrollToSection(scrollToAbout)}
          >
            About Me
          </button>
          <button
            className="block py-2 px-4 text-white transition hover:text-yellow-500"
            onClick={() => scrollToSection(scrollToWork)}
          >
            Work
          </button>
          <button
            className="block py-2 px-4 text-white transition hover:text-yellow-500"
            onClick={() => scrollToSection(scrollToEducation)}
          >
            Education
          </button>
          <button
            className="block py-2 px-4 text-white transition hover:text-yellow-500"
            onClick={() => scrollToSection(scrollToSkills)}
          >
            Skills
          </button>
        </div>
      </div>
      <div className="w-full h-full bg-[#3b3a37]">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
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
          <div ref={scrollToSkills} className="mb-10">
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
