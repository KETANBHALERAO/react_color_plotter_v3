import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders color plotted image", () => {
  render(<App />);
  const linkElement = screen.getByText(/color plotted image/i);
  expect(linkElement).toBeInTheDocument();
});
