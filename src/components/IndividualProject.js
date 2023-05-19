import React from "react";

export default function IndividualProject({
  name,
  subtitle,
  coverImage,
  link,
  demo,
  hackathon,
  devpost,
  placement,
}) {
  return (
    <div className="border-yellow-500 border-2 rounded-xl bg-[#242321] text-white mt-4 p-4 w-1/2">
      <div className="flex flex-row  justify-center font-bold text-2xl text-yellow-500">
        {hackathon}
      </div>
      <div className="flex flex-row  justify-center font-bold text-2xl">
        {name}
      </div>
      <div className="flex flex-row justify-center text-xl font-style: italic">
        {subtitle}
      </div>
      <div className="flex flex-row justify-center text-xl">
        <a href={link} target="_blank" className="text-yellow-500">
          Code
        </a>

        {demo != null ? (
          <>
            <>•</>
            <a href={demo} target="_blank" className="text-yellow-500">
              Demo
            </a>
          </>
        ) : null}

        <>
          <>•</>
          <a href={devpost} target="_blank" className="text-yellow-500">
            Devpost
          </a>
        </>
      </div>
      {coverImage != null ? (
        <img
          src={coverImage}
          alt="hey"
          className="rounded-xl object-cover scale-80"
        />
      ) : null}
      <div className="flex flex-row  justify-center font-bold text-2xl text-yellow-500 mt-4">
        {placement}
      </div>
    </div>
  );
}
