import React from "react";
import Head from "./Table/Head";
import Body from "./Table/Body";

const CryptoTable = () => {
  return (
    <div className="overflow-auto h-[400px] md:h-[800px] lg:h-[700px]">
      <table className="w-full text-center md:w-4/5 md:m-auto table">
        <Head />
        <tbody className="w-full h-10">
          <Body />
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
