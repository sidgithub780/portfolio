import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import tcbooster from "../assets/tcbooster.jpg";

const variants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 1.5,
    },
  },
  hide: {
    y: -20,
    opacity: 0,
  },
};

export default function Intro() {
  return (
    <div className="flex flex-col md:flex-row mt-32 max-w-full justify-center">
      <div className="md:w-2/5 md:flex md:items-center ">
        <img
          src={tcbooster}
          alt="picture of Siddhanth Kumar"
          className="rounded-full object-cover w-10/12 h-full md:w-10/12 max-w-full"
          style={{
            boxShadow: "0 0 30px rgba(239, 202, 97, 0.9)", // Yellow glow effect
          }}
        />
      </div>
      <div className="md:w-2/5 md:pl-8 md:flex md:flex-col justify-center">
        <div className="flex mt-5">
          {"Siddhanth".split("").map((letter, index) => {
            return (
              <span
                key={index}
                className="hover:-mt-2 transition-all duration-500 hover:duration-100 text-yellow-500 text-3xl sm:text-7xl font-bold hover:text-white"
              >
                {letter}
              </span>
            );
          })}
        </div>
        <div className="flex flex-row mt-2 md:mt-0">
          <div className="flex">
            {"Kumar".split("").map((letter, index) => {
              return (
                <span
                  key={index}
                  className="hover:-mt-2 transition-all duration-500 hover:duration-100 text-yellow-500 text-3xl sm:text-7xl font-bold hover:text-white"
                >
                  {letter}
                </span>
              );
            })}
          </div>
          <p className="text-white text-2xl md:mx-2">(he/him)</p>
        </div>
        <p className="text-3xl font-bold text-white mt-5">
          CS @ <span className="text-yellow-500">Purdue</span>
        </p>
        <p className="mt-4 text-2xl font-bold text-yellow-500">
          kumar701@purdue.edu
        </p>
        <div className="flex flex-row mt-5">
          <div className="transition bg-[#3b3a37] hover:bg-white rounded-lg">
            <a href="https://www.instagram.com/siddh4nth/" target="_blank">
              <InstagramIcon fontSize="large" style={{ color: "#eab308" }} />
            </a>
          </div>
          <div className="transition bg-[#3b3a37] hover:bg-white rounded-lg">
            <a
              href="https://www.linkedin.com/in/siddhanth-kumar-3897b5205/"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" style={{ color: "#eab308" }} />
            </a>
          </div>
          <div className="transition bg-[#3b3a37] hover:bg-white rounded-lg">
            <a href="https://github.com/sidgithub780" target="_blank">
              <GitHubIcon fontSize="large" style={{ color: "#eab308" }} />
            </a>
          </div>
          <div className="transition bg-[#3b3a37] hover:bg-white rounded-lg">
            <a href="https://twitter.com/sidkumars23" target="_blank">
              <TwitterIcon fontSize="large" style={{ color: "#eab308" }} />
            </a>
          </div>
          <div className="transition bg-[#3b3a37] hover:bg-white rounded-lg">
            <a href="https://youtube.com/@siddhanthkumar" target="_blank">
              <YouTubeIcon fontSize="large" style={{ color: "#eab308" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
