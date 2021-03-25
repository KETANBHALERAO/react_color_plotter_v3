import React from "react";
import ColorCanvas from "./components/ColorCanvas";
import "./components/ColorCanvas.css";

//import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="flex_box">
        {/* <ColorCanvas red_start={8} red_end={40}></ColorCanvas>
        <ColorCanvas red_start={48} red_end={80}></ColorCanvas>
        <ColorCanvas red_start={88} red_end={120}></ColorCanvas>
        <ColorCanvas red_start={128} red_end={160}></ColorCanvas>
        <ColorCanvas red_start={168} red_end={200}></ColorCanvas>
        <ColorCanvas red_start={208} red_end={240}></ColorCanvas>
        <ColorCanvas red_start={248} red_end={256}></ColorCanvas> */}
        <ColorCanvas red_start={8} red_end={256}></ColorCanvas>
      </div>
    </div>
  );
}

export default App;
