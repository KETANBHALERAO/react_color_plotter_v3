import { render, screen } from "@testing-library/react";
import ColorPixel from "./ColoredPixel";

test("renders ColorPixel", () => {
  render(<ColorPixel />);
  screen.debug();
});
