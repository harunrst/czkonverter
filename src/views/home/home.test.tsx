import { render, screen } from "@testing-library/react";
import Home from ".";

test("renders learn react link", () => {
  render(<Home />);
  const linkElement = screen.getByText(/homeke/i);
  expect(linkElement).toBeInTheDocument();
});
