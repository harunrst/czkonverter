const exchangeRateUrl =
  "https://cors-anywhere.herokuapp.com/https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt";

export const getExchangeRates = async (): Promise<string> => {
  const response = await fetch(exchangeRateUrl);

  if (!response.ok) {
    throw new Error("Error while fetching exchange rates");
  }
  //parse the txt and return array of json objects
  const data = await response.text();
  return data;
};
