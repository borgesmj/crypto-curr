import React from "react";
import Arrow from "./Arrow";

const Body = () => {
  const coinName = "Bitcoin";
  const coin24H = 0.64697;
  const coinPrice = 46256;
  const arrowColor = coin24H < 0 ? "red" : "green";
  const coinImg = 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400'

  return (
    <tr className="border-b-solid border-b-[1px] border-b-[#ffffff50] table-row text-xs md:text-xl lg:text-xl">
      <td className="table-cell py-[12px]   w-4">
        <img
          className="w-full"
          src={coinImg}
          alt="Bitcoin"
        />
      </td>
      <td className=" table-cell py-[12px] font-bold ">{coinName}</td>
      <td className=" table-cell py-[12px] ">{coinPrice}</td>
      <td className=" table-cell align-middle py-[12px] w-16 m-auto h-6">
        <span
          className={`inline-block w-1/5 h-2/5 text-center align-middle md:h-2/5 ${
            coin24H < 0 ? "rotate-180" : null
          }`}
        >
          <Arrow arrowColor={arrowColor} />
        </span>
        <span className="inline-block w-4/5 h-2/5 text-center align-middle md:h-2/5">
          {coin24H.toFixed(2)}
        </span>
      </td>
      <td className=" table-cell py-[12px]">See More</td>
    </tr>
  );
};

export default Body;
