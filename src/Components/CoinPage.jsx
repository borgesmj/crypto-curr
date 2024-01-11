import { useParams, useNavigate } from "react-router-dom";
import BackBtn from "./CoinPage/BackBtn";
import './CoinPage.css'

const CoinPage = ({ coinData }) => {
  let { name } = useParams();
  const filteredData = coinData.filter((item) => {
    return item.name === name;
  });

  const navigate = useNavigate();

  const coinInfo = filteredData[0];
  console.log(coinInfo);


  const formatearFecha = (date) =>{
    return new Date(date).toLocaleDateString()
  } 
  return (
    <div id='coinpage' className="overflow-auto p-4 w-full h-[350px] md:h-[750px] lg:h-[650px] text-xs md:text-xl lg:text-2xl">
      <div
        className="h-10 w-auto"
        onClick={() => {
          navigate(-1);
        }}
      >
        <BackBtn className='h-full' />
      </div>
      <div className="w-full h-fit p-2 flex flex-wrap md:p-4 justify-between items-start">
        <section className="flex flex-col items-start justify-between w-full mb-4">
          <img src={coinInfo?.image} alt="" className="w-20 h-auto m-auto" />
          <table className="w-full">
            <tbody>
              <tr>
                <th className="px-1">Name:</th>
                <td className="px-1">{coinInfo?.name}</td>
              </tr>
              <tr>
                <th className="px-1">Symbol:</th>
                <td className="px-1">{coinInfo?.symbol}</td>
              </tr>
              <tr>
                <th className="px-1">Current Price:</th>
                <td className="px-1">${coinInfo?.current_price}</td>
              </tr>
              <tr>
                <th className="px-1">Market Cap Rank:</th>
                <td className="px-1">{coinInfo?.market_cap_rank}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="flex flex-col items-center justify-between w-full mb-4">
          <h1 className="font-bold border-b-solid border-b-white border-b-[1px] w-full text-center text-[#FFD700]">Last 24h</h1>
          <table className="w-full">
            <tbody className="w-full">
              <tr>
                <th>High:</th>
                <td>{coinInfo?.high_24h}$</td>
              </tr>
              <tr>
                <th>Low:</th>
                <td>{coinInfo?.low_24h}$</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="flex flex-col items-center justify-between w-full mb-4 md:w-[45%] md:mr-4 h-fit">
        <h1 className="font-bold border-b-solid border-b-white border-b-[1px] w-full text-center text-[#FFD700]">Price and Capitalization Statistics</h1>
          <table className="w-full">
            <tbody>
              <tr>
                <th>Market Cap:</th>
                <td>{coinInfo?.market_cap}</td>
              </tr>
              <tr>
                <th>Circulating Supply:</th>
                <td>{coinInfo?.circulating_supply}</td>
              </tr>
              <tr>
                <th>Total Supply:</th>
                <td>{coinInfo?.total_supply}</td>
              </tr>
              <tr>
                <th>Max Supply:</th>
                <td>{coinInfo?.max_supply}</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="flex flex-col items-center justify-between w-full mb-4  md:w-[45%]">
        <h1 className="font-bold border-b-solid border-b-white border-b-[1px] w-full text-center text-[#FFD700]">Price and Trading Volume History</h1>
          <table className="w-full">
                <tbody>
                    <tr>
                        <th>Lowest Price:</th>
                        <td>{coinInfo?.atl}$</td>
                    </tr>
                    <tr>
                        <th>Low Price Date:</th>
                        <td>{formatearFecha(coinInfo?.atl_date)}</td>
                    </tr>
                    <tr>
                        <th>Maximum Price:</th>
                        <td>{coinInfo?.ath}$</td>
                    </tr>
                    <tr>
                        <th>High Price Date:</th>
                        <td>{formatearFecha(coinInfo?.ath_date)}</td>
                    </tr>
                    <tr>
                        <th>Price Change in the Last 24 Hours:</th>
                        <td>{coinInfo?.price_change_24h}$</td>
                    </tr>
                    <tr>
                        <th>Price Change % in the Last 24 Hours:</th>
                        <td>{coinInfo?.price_change_percentage_24h}%</td>
                    </tr>
                    <tr>
                        <th>Last 24 Hours Trading Volume:</th>
                        <td>{coinInfo?.total_volume}</td>
                    </tr>
                    <tr>
                        <th>Last Update:</th>
                        <td>{formatearFecha(coinInfo?.last_updated)}</td>
                    </tr>
                </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default CoinPage;
