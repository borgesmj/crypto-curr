import React from "react";
import Arrow from "./Arrow";
import { NavLink } from "react-router-dom";

const Body = ({
  name,
  price_change_percentage_24h,
  current_price,
  coin_image,
}) => {
  const coinName = name;
  const coin24H = price_change_percentage_24h;
  const coinPrice = current_price;
  const arrowColor = coin24H < 0 ? "red" : "green";
  const coinImg = coin_image;

  return (
    <tr className="border-b-solid border-b-[1px] border-b-[#ffffff50] table-row text-xs md:text-xl lg:text-xl">
      <td className="table-cell py-[12px]   w-4">
        <img className="w-full" src={coinImg} alt="Bitcoin" />
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
      <td className=" table-cell py-[8px] text-[10px] md:text-[15px] lg:text-[20px]">
        <NavLink
          to={`/crypto-curr/${coinName}`}
          className="lg:px-2 text-[#ddb900] border-b-[#ddb900]  border-b-solid border-b-[1px] lg:hover:bg-[#ddb900] lg:hover:text-white"
        >
          See More
        </NavLink>
      </td>
    </tr>
  );
};

export default Body;
