import { useQuery } from "react-query";
import {
  getCurrencies,
  getExchangeRates,
} from "../../services/exchangeService";
import { ExchangeRate } from "../../services/models/ExchangeRate";
import "./home.css";

//todo: add workflows: build, test, lint, reading-time, deploy
//todo: cover more with tests
//todo: add sub/common components and styles
//todo: update readme
//todo: add webpack to bundle
//todo: deploy to GCP as static website
//todo: add integration tests
//todo: add linter

const Home = () => {
  const { isLoading, error, data } = useQuery<ExchangeRate[], Error>(
    getExchangeRates.name,
    getExchangeRates
  );
  return (
    <div className="Home">
      <h1>CZKonverter</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data &&
        data.map((exchangeRate) => (
          <p>
            {exchangeRate.currency.code}: {exchangeRate.value}
          </p>
        ))}
      {data &&
        getCurrencies(data).map((currency) => (
          <p>
            {currency.code}: {currency.country}: {currency.name}
          </p>
        ))}
    </div>
  );
};

export default Home;
