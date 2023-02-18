import { useQuery } from "react-query";
import { getExchangeRates } from "../../services/exchangeService";
import "./home.css";

const Home = () => {
  const { isLoading, error, data } = useQuery<string, Error>(
    getExchangeRates.name,
    getExchangeRates
  );

  return (
    <div className="Home">
      <h1>CZKonverter</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <div>{data}</div>}
    </div>
  );
};

export default Home;
