import React from "react";
// import PROJECT_CONSTANTS from '../config';
import ColoredPixel from "./ColoredPixel";
import "./ColorCanvas.css";

function ColorCanvas(props) {
  console.log(props);

  var pixel_rgb_array = React.useMemo(() => {
    var pixel_rgbi_array = [];
    var counter = 0;
    for (let i = props.red_start; i <= props.red_end; i = i + 8) {
      for (let j = 8; j <= 256; j = j + 8) {
        for (let k = 8; k <= 256; k = k + 8) {
          counter++;
          pixel_rgbi_array.push(
            <ColoredPixel key={counter} red={i} green={j} blue={k} />
          );
        }
      }
    }
    // console.log(counter);

    return pixel_rgbi_array;
  }, [props.red_start, props.red_end]);

  return <React.Fragment>{pixel_rgb_array}</React.Fragment>;

  //    return <span style={{backgroundColor:'rgba(19,19,19)'}}></span>;
}
export default ColorCanvas;
