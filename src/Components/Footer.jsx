import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full h-16 px-10 flex justify-between items-start flex-col text-xs py-4 my-4 md:text-[1rem]">
      <p className="mb-2">
        &copy; 2024{" "}
        <a
          href="https://github.com/borgesmj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FFD700] lg:hover:font-bold border-b-[#FFD700] border-b-solid border-b-[1px]"
        >
          borgesmj
        </a>{" "}
        All rights reserved
      </p>
      <p>
        Contact:{" "}
        <a
          href="mailto:borgesmj19@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FFD700] lg:hover:font-bold border-b-[#FFD700] border-b-solid border-b-[1px]"
        >borgesmj19@gmail.com</a>
      </p>
    </footer>
  );
};

export default Footer;
