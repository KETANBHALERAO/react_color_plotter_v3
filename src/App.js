import React from "react";
import ColorCanvas from "./components/ColorCanvas";
import "./App.css";
import PROJECT_CONSTANTS from "./config";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  top: 50%;
  left: 50%;
  margin: auto;
  height: 128px;
  width: 256px;
`;

function App() {
  return (
    <div className="App">
      <h1>Color Plotted Image</h1>
      <FlexBox>
        <ColorCanvas
          color_start={PROJECT_CONSTANTS.COLOR_START}
          color_end={PROJECT_CONSTANTS.COLOR_END}
          color_step={PROJECT_CONSTANTS.STEPS}
        />
      </FlexBox>
    </div>
  );
}

export default App;
