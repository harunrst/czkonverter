import { render, screen } from "@testing-library/react";
import Home from ".";
import { getQueryComponent } from "../../common/utils";

test("Renders Home", () => {
  render(getQueryComponent(<Home />));
  const linkElement = screen.getByText(/CZKonverter/i);
  expect(linkElement).toBeInTheDocument();
});
