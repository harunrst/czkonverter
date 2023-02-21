import { render, screen } from "@testing-library/react";
import Home from ".";
import { getQueryComponent } from "../../common/utils";

test("Renders Home", () => {
  render(getQueryComponent(<Home />));
  const linkElement = screen.getByText(/CZK/);
  expect(linkElement).toBeInTheDocument();
});
