import { Currency } from "./models/Currency";
import { ExchangeRate } from "./models/ExchangeRate";

//todo: handle cors properly
const exchangeRateUrl =
  "https://cors-anywhere.herokuapp.com/https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt";

export const getExchangeRates = async (): Promise<ExchangeRate[]> => {
  const response = await fetch(exchangeRateUrl);

  if (!response.ok) {
    throw new Error("Error while fetching exchange rates");
  }

  const data = await response.text();

  return parseExchangeRates(data);
};

export const parseExchangeRates = (data: string): ExchangeRate[] => {
  if (!data) {
    throw new Error("Exchange rates not found.");
  }

  const lines = data.split("\n");
  const exchangeRates: ExchangeRate[] = [];

  lines.forEach((line, index) => {
    if (index === 0 || index === 1 || !line) {
      return;
    }

    // eslint-disable-next-line
    const [country, currencyName, _, currencyCode, value] = line.split("|");
    const exchangeRate: ExchangeRate = {
      currency: {
        name: currencyName,
        code: currencyCode,
        country: country,
      } as Currency,
      value: parseFloat(value),
    };
    exchangeRates.push(exchangeRate);
  });

  return exchangeRates;
};

export const getCurrencies = (exchangeRates: ExchangeRate[]): Currency[] =>
  exchangeRates.reduce((acc, cur) => [...acc, cur.currency], [] as Currency[]);
