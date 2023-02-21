import { useQuery } from "react-query";
import { getExchangeRates } from "../../services/exchangeService";
import { ExchangeRate } from "../../services/models/ExchangeRate";
import ExcahngeRates from "./components/exchangeRates";
import { Typography } from "@mui/material";
import Container from "../../components/styled/Container";
import ContainerItem from "../../components/styled/ContainerItem";

//todo: add workflows: build, test, lint, reading-time, deploy
//todo: cover more with tests
//todo: update readme
//todo: add webpack to bundle
//todo: deploy to GCP as static website
//todo: add integration tests

const Home = () => {
  const { error, data } = useQuery<ExchangeRate[], Error>(
    getExchangeRates.name,
    getExchangeRates
  );

  return (
    <Container column>
      <div>
        <Typography variant="h3" align="center">
          <span style={{ color: "green" }}>CZK</span>onverter
        </Typography>
      </div>
      <Container>
        {/* //todo: handle error better (i.e: show error message) */}
        {error && <div>Something went wrong ...</div>}
        <ContainerItem flex={6}>
          <ExcahngeRates exchangeRates={data} />
        </ContainerItem>
      </Container>
    </Container>
  );
};

export default Home;
