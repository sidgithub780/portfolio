import React from "react";

export default function ({
  title,
  description,
  school,
  abstractLink,
  codeLink,
}) {
  return (
    <div>
      <p className="text-white text-2xl font-bold mt-4">{title}</p>
      <p className="text-white mt-2">{description}</p>
      <p className="text-white mt-2">{school}</p>
      <p className="text-white mt-2">
        {abstractLink != null ? (
          <>
            <a
              href={abstractLink}
              target="_blank"
              rel="noreferrer"
              className="text-yellow-500"
            >
              Abstract
            </a>
            •{" "}
          </>
        ) : null}

        {codeLink != null ? (
          <a
            className="text-yellow-500"
            href={codeLink}
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        ) : null}
      </p>
    </div>
  );
}
