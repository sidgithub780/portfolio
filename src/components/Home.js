import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white font-bold text-3xl">Yo! I'm... </p>
        <div className="flex flex-row mt-5 ">
          {"Siddhanth".split("").map((letter, index) => {
            return (
              <span
                key={index}
                className=" hover:-mt-2 transition-all duration-500 hover:duration-100 text-green-500 text-3xl sm:text-7xl font-bold hover:text-white"
              >
                {letter}
              </span>
            );
          })}

          <p className="text-3xl sm:text-7xl font-bold text-green-500 animate-bounce">
            🍏
          </p>
        </div>
        <p className="text-3xl font-bold text-white mt-5">
          I am a{" "}
          <motion.span
            className="text-green-500"
            key={adjective}
            variants={variants}
            animate={"show"}
            initial="hide"
          >
            {adjective}
          </motion.span>{" "}
          CS enthusiast, high schooler, and aspiring SWE.
        </p>
      </div>
    </div>
  );
}

export default Home;
