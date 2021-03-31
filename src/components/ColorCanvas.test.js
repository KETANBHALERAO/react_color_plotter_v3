import "@testing-library/jest-dom/extend-expect";
import useColorGenerator from "../hooks/colorGenerator";
import PROJECT_CONSTANTS from "../config";

/**
 * This will call custom hook which generates color array
 * Checks for uniqueness & size of array generated
 */

test("Color Canvas - Check for unique colors", async () => {
  const [color_start, color_end, color_step] = [
    PROJECT_CONSTANTS.COLOR_START,
    PROJECT_CONSTANTS.COLOR_END,
    PROJECT_CONSTANTS.STEPS
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

  expect(unique_color_list_size).toEqual(32768);
});
