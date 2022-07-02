import Image from "next/image";
import React from "react";

const GameLabel = ({
  gameName,
  isIndoor,
  iconSrc,
  variant = "white",
  level,
}: {
  iconSrc?: string;
  gameName?: string;
  isIndoor?: boolean;
  variant?: "white" | "black";
  level?: number;
}) => {
  return (
    <div className="flex flex-row">
      {iconSrc && <Image src={iconSrc} alt="icon of the game" />}
      <div
        className={`w-[125px] flex flex-row justify-between divide-x divide-solid text-sm ${
          variant === "black" ? "w-[150px] text-xs text-black font-bold" : ""
        }`}
      >
        {gameName && <p className="flex-grow text-center">{gameName}</p>}{" "}
        {isIndoor !== undefined && (
          <p className="flex-grow text-center">{isIndoor ? "室內" : "室外"}</p>
        )}
        {level && <p className="flex-grow text-center">{`L${level}`}</p>}
      </div>
    </div>
  );
};

export default GameLabel;
