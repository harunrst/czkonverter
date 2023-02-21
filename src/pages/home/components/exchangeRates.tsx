import { Typography } from "@mui/material";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import React, { CSSProperties } from "react";
import { RowLoader } from "../../../components/Loader";
import Container from "../../../components/styled/Container";
import { ExchangeRate } from "../../../services/models/ExchangeRate";

//todo: could be a styled component
const paperStyles: CSSProperties = {
  borderWidth: "0.5px",
  borderStyle: "solid",
  boxShadow: "1px 1px",
  borderRadius: "10px",
  height: "400px",
  maxWidth: "500px",
  flexWrap: "wrap",
};

const ExchangeRates = ({ exchangeRates }: { exchangeRates?: ExchangeRate[] }) =>
  !exchangeRates ? (
    <RowLoader />
  ) : (
    exchangeRates && (
      <React.Fragment>
        <Typography variant="h4" marginBottom={3}>
          Exchange Rates
        </Typography>
        <Container style={paperStyles}>
          {exchangeRates.map((exchangeRate) => (
            <ListItemText
              key={exchangeRate.currency.code}
              style={{ width: "20%" }}
              primary={exchangeRate.currency.code}
              secondary={exchangeRate.value}
            />
          ))}
        </Container>
      </React.Fragment>
    )
  );

export default ExchangeRates;
