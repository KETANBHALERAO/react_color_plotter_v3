import React, { useRef, useEffect } from "react";
import useColorGenerator from "../hooks/colorGenerator";
import config from "../config";

/**
 * @author Ketan Bhalerao
 * @description This component Plot list of colors on Canvas
 * based on props passed, list of props it accepts are given below
 * e.g if start - 8, end - 256, step - 8,
 * it will plot 32768 distinct color with those many distinct r,g,b values
 *
 * @param {color_start, color_end, color_step} props
 */

function ColorCanvas(props) {
  const canvasRef = useRef(null);
  const colors = useColorGenerator({ ...props });
  const [isLoaded, setIsLoaded] = React.useState(false);
  let loader = null;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    for (let i = 1; i < config.PLOTTER_WIDTH; i++) {
      for (let j = 1; j < config.PLOTTER_HEIGHT; j++) {
        let { red, green, blue } = colors.next().value;
        context.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
        context.fillRect(i, j, 1, 1);
      }
    }
    setIsLoaded(true);
  }, [colors]);

  if (!isLoaded) {
    loader = <div>LOADING.......</div>;
  }

  return (
    <div>
      {loader}
      <canvas ref={canvasRef} />
    </div>
  );
}
export default ColorCanvas;
