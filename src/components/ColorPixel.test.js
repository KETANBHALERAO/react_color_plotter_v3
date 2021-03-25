import { render, screen } from "@testing-library/react";
import ColorPixel from "./ColoredPixel";

test("renders ColorPixel", () => {
  render(<ColorPixel />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
