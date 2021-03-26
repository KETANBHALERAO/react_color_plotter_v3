import { render, screen } from "@testing-library/react";
import ColorCanvas from "./ColorCanvas";

/**
 * This will render ColorCanvas Component
 * Checks for no of divs & style attribute
 */

test("renders color canvas", async () => {
  render(<ColorCanvas color_start={8} color_end={16} color_step={8} />);

  const items = await screen.findAllByRole("div");
  expect(items).toHaveLength(8);

  expect(items[0]).toHaveAttribute(
    "style",
    "background-color: rgb(8, 8, 8); height: 1px; width: 1px;"
  );

  expect(items[6]).toHaveAttribute(
    "style",
    "background-color: rgb(16, 16, 8); height: 1px; width: 1px;"
  );
});
