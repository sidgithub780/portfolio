import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import prompPic from "../assets/croppedprompic.jpg";

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

function Home() {
  const words = ["vocal", "resilient", "positive", "driven", "passionate"];
  const [adjective, setAdjective] = useState("communicative");

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count = (count + 1) % words.length;
      setAdjective(words[count]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div name="home" className="w-full h-screen bg-[#3b3a37]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <div className="flex flex-row">
          <div>
            <p className="text-white font-bold text-3xl">Yo! I'm... </p>
            <div className="flex flex-row mt-5 ">
              {"Siddhanth".split("").map((letter, index) => {
                return (
                  <span
                    key={index}
                    className=" hover:-mt-2 transition-all duration-500 hover:duration-100 text-yellow-500 text-3xl sm:text-7xl font-bold hover:text-white"
                  >
                    {letter}
                  </span>
                );
              })}

              <p className="text-3xl sm:text-7xl font-bold text-yellow-500 animate-bounce">
                🙂
              </p>
            </div>
            <p className="text-3xl font-bold text-white mt-5">
              Incoming CS @ <span className="text-yellow-500">Purdue</span>
            </p>
            <p className="text-3xl font-bold text-white mt-5">
              I am a{" "}
              <motion.span
                className="text-yellow-500"
                key={adjective}
                variants={variants}
                animate={"show"}
                initial="hide"
              >
                {adjective}
              </motion.span>{" "}
            </p>
            <p className="text-3xl font-bold text-white mt-1">
              -CS enthusiast {<br />} -high schooler {<br />} -aspiring SWE
            </p>
          </div>
          <div>
            <img
              src={prompPic}
              alt="picture of siddhanth kumar"
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
