import { InputAdornment, OutlinedInput, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { useState } from "react";
import Container from "../../../components/styled/Container";
import { ExchangeRate } from "../../../services/models/ExchangeRate";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { convertToCurrency } from "../../../services/exchangeService";

const Converter = ({ selectedRate }: { selectedRate?: ExchangeRate }) => {
  const [amount, setAmount] = useState<number>(0);

  const convertedAmount = useMemo(() => {
    if (selectedRate) {
      return convertToCurrency(amount, selectedRate.value);
    }
  }, [selectedRate, amount]);

  return (
    <React.Fragment>
      <Container data-testid="converter" column>
        <Typography variant="h4" marginBottom={3}>
          Converter
        </Typography>
        <OutlinedInput
          data-testid="amountInput"
          id="outlined-adornment-weight"
          placeholder="Amount"
          type="number"
          onChange={(e) =>
            setAmount(Number((e.target as HTMLTextAreaElement).value))
          }
          endAdornment={<InputAdornment position="end">CZK</InputAdornment>}
        />
        {amount > 0 && selectedRate && (
          <Typography data-testid="convertedAmount" variant="h5" marginTop={5}>
            {convertedAmount + " "}
            <span style={{ color: "green" }}>
              {selectedRate?.currency.code}
            </span>
          </Typography>
        )}
        {!selectedRate && (
          <Typography data-testid="non-selectedRate" variant="h5" marginTop={5}>
            <ArrowBackIcon color="success" /> Please select a currency to
            convert.
          </Typography>
        )}
        {selectedRate && amount === 0 && (
          <Typography data-testid="zeroAmount" variant="h5" marginTop={5}>
            <ArrowUpwardIcon color="success" /> Please enter an amount to
            convert{" "}
            <span style={{ color: "green" }}>
              {selectedRate?.currency.code}
            </span>
          </Typography>
        )}
      </Container>
    </React.Fragment>
  );
};

export default Converter;
