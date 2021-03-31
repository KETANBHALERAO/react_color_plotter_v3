/**
 * @author Ketan Bhalerao
 * @description This component generates array of ColoredPixel Components
 * based on props passed, list of props it accepts are given below
 * e.g if start - 8, end - 256, step - 8,
 * it will generate 32768 components with those many distinct r,g,b values
 *
 * @param {color_start, color_end, color_step} props
 */

function* colorGenerator(props) {
  for (
    let i = props.color_end;
    i >= props.color_start;
    i = i - props.color_step
  ) {
    for (
      let j = props.color_end;
      j >= props.color_start;
      j = j - props.color_step
    ) {
      for (
        let k = props.color_end;
        k >= props.color_start;
        k = k - props.color_step
      ) {
        yield {
          red: k,
          green: j,
          blue: i
        };
      }
    }
  }
}

export default colorGenerator;
