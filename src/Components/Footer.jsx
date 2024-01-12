import React from "react";
import Github from './Icons/Github'
import Codepen from './Icons/Codepen'
import Linkedin from './Icons/Linkedin'
import FreecodeCamp from './Icons/FreecodeCamp'

const Footer = () => {

  const RRSS = [
    {
      icon: <Github/>,
      link: 'https://github.com/borgesmj'
    },
    {
      icon: <Codepen/>,
      link: 'https://codepen.io/borgesmj'
    },
    {
      icon: <Linkedin/>,
      link: 'https://www.linkedin.com/in/borgesmj/'
    },
    {
      icon: <FreecodeCamp/>,
      link: 'https://www.freecodecamp.org/borgesmj19'
    }
  ]
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full h-16 px-4 flex justify-between items-start flex-row my-2 md:text-[1rem] text-[10px] leading-none ">
      <div className="w-1/2 h-full flex flex-col justify-center items-start">
        <p className="mb-2 ">
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
          >
            borgesmj19@gmail.com
          </a>
        </p>
      </div>
      <div className="w-1/2 h-full flex flex-wrap justify-around items-center">
        {RRSS.map((item, index) => (
          <a href={item.link} index={item} className="hover:cursor-pointer  w-2/5 h-1/2 flex justify-center items-center lg:w-1/4 lg:h-full" target="blank">{item.icon}</a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
