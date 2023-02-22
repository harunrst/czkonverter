import { render, screen } from "@testing-library/react";
import { getQueryComponent } from "../../../common/utils";
import { getExchangeRates } from "../../../mock/exchangeService.mock";
import ExchangeRates from "./exchangeRates";

test("Renders exchange rates component", () => {
  //act
  render(
    getQueryComponent(
      <ExchangeRates exchangeRates={[]} onRateSelect={() => {}} />
    )
  );

  //assert
  const linkElement = screen.getByTestId("exchangeRates");
  expect(linkElement).toBeInTheDocument();
});

test("Renders all exchange rates", async () => {
  //arrange
  const exchangeRates = await getExchangeRates();

  //act
  render(
    getQueryComponent(
      <ExchangeRates exchangeRates={exchangeRates} onRateSelect={() => {}} />
    )
  );

  //assert
  const listLength = screen.getAllByTestId("exchangeRate").length;
  expect(listLength).toBe(exchangeRates.length);
});
