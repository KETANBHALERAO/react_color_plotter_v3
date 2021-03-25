import { render, screen } from "@testing-library/react";
import ColorCanvas from "./ColorCanvas";

test("renders color canvas", () => {
  render(<ColorCanvas color_start={8} color_end={16} color_step={8} />);
  screen.debug();
});
