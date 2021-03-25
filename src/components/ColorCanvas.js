import React from "react";
import ColoredPixel from "./ColoredPixel";

function ColorCanvas(props) {
  const pixel_rgb_array = React.useMemo(() => {
    const rgbi_array = [];
    let counter = 0;
    for (
      let i = props.color_start;
      i <= props.color_end;
      i = i + props.color_step
    ) {
      for (
        let j = props.color_start;
        j <= props.color_end;
        j = j + props.color_step
      ) {
        for (
          let k = props.color_start;
          k <= props.color_end;
          k = k + props.color_step
        ) {
          counter++;
          rgbi_array.push(
            <ColoredPixel key={`value=${counter}`} red={i} green={j} blue={k} />
          );
        }
      }
    }
    return rgbi_array;
  }, [props.color_start, props.color_end, props.color_step]);

  return pixel_rgb_array;
}
export default ColorCanvas;
