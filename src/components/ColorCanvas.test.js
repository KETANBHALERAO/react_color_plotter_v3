import "@testing-library/jest-dom/extend-expect";
import useColorGenerator from "../hooks/colorGenerator";
import config from "../config";

/**
 * This will call custom hook which generates color array
 * Checks for uniqueness & size of array generated
 */

test("Color Canvas - Check for unique colors", async () => {
  const [color_start, color_end, color_step] = [
    config.COLOR_START,
    config.COLOR_END,
    config.STEPS
  ];

  const color_list = [];
  for (let comb of useColorGenerator({
    color_start: color_start,
    color_end: color_end,
    color_step: color_step
  })) {
    color_list.push(comb);
  }
  const unique_color_list_size = new Set(color_list).size;

  expect(unique_color_list_size === color_list.length).toBeTruthy();
});

/**
 * This will call custom hook which generates color array
 * Checks for uniqueness & size of array generated
 */

test("Color Canvas - count of colors", async () => {
  const [color_start, color_end, color_step] = [
    config.COLOR_START,
    config.COLOR_END,
    config.STEPS
  ];
  const total = Math.pow(
    (color_end - color_start + color_step) / color_step,
    3
  );

  const color_list = [];

  for (let comb of useColorGenerator({
    color_start: color_start,
    color_end: color_end,
    color_step: color_step
  })) {
    color_list.push(comb);
  }

  expect(new Set(color_list).size).toEqual(total);
});
