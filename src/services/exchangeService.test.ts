import {
  getCurrencies,
  getExchangeRates,
  parseExchangeRates,
} from "./exchangeService";

test("Fetches exchange rates", async () => {
  //act
  const exchangeRates = await getExchangeRates();

  //assert
  expect(exchangeRates.length).toBeGreaterThan(0);
});

test("Parses exchange rates correctly", async () => {
  //act
  const exchangeRates = await getExchangeRates();

  //assert
  expect(exchangeRates.every((e) => e.value > 0)).toBeTruthy();
  expect(exchangeRates.every((e) => !!e.currency)).toBeTruthy();
  expect(exchangeRates.every((e) => e.currency.code.length === 3)).toBeTruthy();
});

test("Parser throws when the data is not found", () => {
  try {
    //act
    parseExchangeRates("");
  } catch (error: any) {
    //assert
    expect(error.toString()).toContain("Exchange rates not found.");
  }
});

test("getCurrencies returns all currencies", async () => {
  //arrange
  const exchangeRates = await getExchangeRates();

  //act
  const currencies = getCurrencies(exchangeRates);

  //assert
  expect(currencies.length).toBe(exchangeRates.length);
});
