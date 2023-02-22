import { render, screen } from "@testing-library/react";
import Home from "./home";
import { getQueryComponent } from "../../common/utils";

test("Renders Home", () => {
  //act
  render(getQueryComponent(<Home />));

  //assert
  const linkElement = screen.getByTestId("czkonverter");
  expect(linkElement).toBeInTheDocument();
});
