import React from "react";
import ColorCanvas from "./components/ColorCanvas";
import "./App.css";
import config from "./config";

function App() {
  return (
    <div className="App">
      <h1>Color Plotted Image</h1>
      <ColorCanvas
        color_start={config.COLOR_START}
        color_end={config.COLOR_END}
        color_step={config.STEPS}
      />
    </div>
  );
}

export default App;
