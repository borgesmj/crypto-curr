import React from "react";

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-fil p-4">
      <h1 className="uppercase font-bold text-md text-center m-4">
        Top 10 crypto coins currency
      </h1>
      <p className="text-xs text-center m-2">
        A practice project I made for{" "}
        <a
          target="blank"
          className="font-bold text-[#FFD700] border-b-[1px] border-b-solir border-b-[#ffd700]"
          href="https://borgesmj.github.io/"
        >
          my portfolio website
        </a>{" "}
        and{" "}
        <a
          className="font-bold text-[#FFD700] border-b-[1px] border-b-solir border-b-[#ffd700]"
          href="https://holajuniors.com/challenges/visualizacion-en-tiempo-real-de-criptomonedas"
          target="blank"
        >
          the holaJuniors challenge
        </a>
      </p>
    </div>
  );
};

export default Header;
