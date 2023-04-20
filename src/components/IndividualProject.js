import React from "react";

export default function IndividualProject({
  name,
  description,
  subtitle,
  coverImage,
}) {
  return (
    <div className="border-yellow-500 border-2 rounded-xl bg-[#242321] text-white mt-4 p-4 w-1/2">
      <div className="flex flex-row bg-red-500 justify-center font-bold text-2xl">
        {name}
      </div>
      <div className="flex flex-row bg-blue-200 justify-center text-xl font-style: italic">
        {subtitle}
      </div>

      {description}

      <img
        src={coverImage}
        alt="hey"
        className="rounded-xl object-cover scale-80"
      />
    </div>
  );
}
