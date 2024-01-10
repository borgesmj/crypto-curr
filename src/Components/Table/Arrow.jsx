import React from "react";

const Arrow = ({arrowColor}) => {
  return (
    <svg
      width="1rem"
      height="1rem"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={arrowColor}
        d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1a2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1"
      />
    </svg>
  );
};

export default Arrow;
