import { render, screen } from "@testing-library/react";
import { getQueryComponent } from "../../../common/utils";
import { getExchangeRates } from "../../../services/exchangeService";
import ExchangeRates from "./exchangeRates";

test("Renders exchange rates component", () => {
  render(getQueryComponent(<ExchangeRates exchangeRates={[]} />));
  const linkElement = screen.getByText(/Exchange Rates/);
  expect(linkElement).toBeInTheDocument();
});

test("Renders all exchange rates", async () => {
  const exchangeRates = await getExchangeRates();
  const { container } = render(
    getQueryComponent(<ExchangeRates exchangeRates={exchangeRates} />)
  );
  const listLength = container.querySelectorAll("p").length;
  expect(listLength).toBe(exchangeRates.length);
});
