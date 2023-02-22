import { useQuery } from "react-query";
import { getExchangeRates } from "../../services/exchangeService";
import { ExchangeRate } from "../../services/models/ExchangeRate";
import ExcahngeRates from "./components/exchangeRates";
import { Typography } from "@mui/material";
import Container from "../../components/styled/Container";
import ContainerItem from "../../components/styled/ContainerItem";
import Converter from "./components/converter";
import { useState } from "react";

//todo: cover more with tests
//todo: update readme
//todo: add webpack to bundle
//todo: deploy to GCP as static website
//todo: add integration tests
//todo: make it responsive

const Home = () => {
  const { error, data } = useQuery<ExchangeRate[], Error>(
    getExchangeRates.name,
    getExchangeRates
  );

  const [selectedRate, setSelectedRate] = useState<ExchangeRate | undefined>(
    undefined
  );

  return (
    <Container column>
      <div data-testid="czkonverter">
        <Typography variant="h3" align="center">
          <span style={{ color: "green" }}>CZK</span>onverter
        </Typography>
      </div>
      <Container>
        {/* //todo: handle error better (i.e: show error message) */}
        {error && <div>Something went wrong ...</div>}
        {!error && (
          <ContainerItem flex={6}>
            <ExcahngeRates
              exchangeRates={data}
              onRateSelect={(sr: ExchangeRate) => setSelectedRate(sr)}
            />
          </ContainerItem>
        )}
        {!error && (
          <ContainerItem flex={6}>
            <Converter selectedRate={selectedRate} />
          </ContainerItem>
        )}
      </Container>
    </Container>
  );
};

export default Home;
