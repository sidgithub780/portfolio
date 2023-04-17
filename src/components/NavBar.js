import React from "react";

const NavBar = () => {
  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 text-lg bg-[#3b3a37]">
      <div className="flex text-yellow-500 font-bold text-2xl">SKUMAR.</div>
      <div>
        <ul className="flex text-white">
          <li className="transition hover:text-yellow-500">Contact</li>
          <li className="transition hover:text-yellow-500">Work</li>
          <li className="transition hover:text-yellow-500">About Me</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
