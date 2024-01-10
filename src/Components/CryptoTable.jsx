import React from "react";
import Head from "./Table/Head";
import Body from "./Table/Body";

const CryptoTable = () => {
  return (
    <table className="w-full text-center md:w-4/5 md:m-auto table">
      <Head />
      <tbody className="w-full">
        <Body />
      </tbody>
    </table>
  );
};

export default CryptoTable;
