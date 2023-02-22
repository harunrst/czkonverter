import { render, screen } from "@testing-library/react";
import { getQueryComponent } from "../../../common/utils";
import { getExchangeRates } from "../../../mock/exchangeService.mock";
import Converter from "./converter";

test("Renders converter component", () => {
  //act
  render(getQueryComponent(<Converter selectedRate={undefined} />));

  //assert
  const linkElement = screen.getByTestId("converter");
  expect(linkElement).toBeInTheDocument();
});

test("Renders non-exchangeRate text when there is not a selected rate.", () => {
  //act
  render(getQueryComponent(<Converter selectedRate={undefined} />));

  //assert
  const linkElement = screen.getByTestId("non-selectedRate");
  expect(linkElement).toBeInTheDocument();
});

test("Renders non-exchangeRate text when there is not a selected rate.", async () => {
  //arrange
  const exchangeRates = await getExchangeRates();

  //act
  render(getQueryComponent(<Converter selectedRate={exchangeRates[5]} />));

  //assert
  const linkElement = screen.getByTestId("zeroAmount");
  expect(linkElement).toBeInTheDocument();
});
