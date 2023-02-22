import { Currency } from "./models/Currency";
import { ExchangeRate } from "./models/ExchangeRate";

const exchangeRateUrl =
  "https://thingproxy.freeboard.io/fetch/https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt";

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
    const [country, currencyName, amount, currencyCode, value] =
      line.split("|");
    const exchangeRate: ExchangeRate = {
      currency: {
        name: currencyName,
        code: currencyCode,
        country: country,
      } as Currency,
      value: parseFloat((parseFloat(value) / Number(amount)).toFixed(4)),
    };
    exchangeRates.push(exchangeRate);
  });

  return exchangeRates;
};

export const getCurrencies = (exchangeRates: ExchangeRate[]): Currency[] =>
  exchangeRates.reduce((acc, cur) => [...acc, cur.currency], [] as Currency[]);

export const convertToCurrency = (
  amount: number,
  exchangeRate: number
): number => parseFloat((amount / exchangeRate).toFixed(2));
