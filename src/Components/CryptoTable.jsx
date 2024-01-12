import React from "react";
import Head from "./Table/Head";
import Body from "./Table/Body";

const CryptoTable = ({coinData}) => {
  return (
    <div className="overflow-auto h-[65%]">
      <table className="w-full text-center md:w-4/5 md:m-auto table h-full">
        <Head />
        <tbody className="w-full h-10">
          {coinData.map((item, index) => (
            <Body
              key={index}
              name={item.name}
              price_change_percentage_24h = {item.price_change_percentage_24h}
              current_price = {item.current_price}
              coin_image = {item.image}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
