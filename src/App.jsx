import { useEffect, useState } from "react";
import Header from "./Components/Header";
import CryptoTable from "./Components/CryptoTable";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Footer from './Components/Footer'
import CoinPage from "./Components/CoinPage";

function App() {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10"
        );
        setCoinData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-screen h-screen bg-[#1A1A1A] max-w-screen  text-[#FFFFFF] p-4 select-none">
      <Header />
      <Routes>
        <Route
          path="/crypto-curr/"
          element={<CryptoTable coinData={coinData} />}
        ></Route>
        <Route
          path="/crypto-curr/:name"
          element={<CoinPage coinData={coinData}/>}
        ></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
