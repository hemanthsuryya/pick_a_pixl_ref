import React from "react";
import ReactDOM from "react-dom";
import PreviousColors from "./PreviousColors.js";

import "./styles.css";

class PreviousColorsGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="previousColorsGrid">
        <PreviousColors startingColor="#ff0000" />
        <PreviousColors startingColor="#ff8000" />
        <PreviousColors startingColor="#ffff00" />
        <PreviousColors startingColor="#80ff00" />
        <PreviousColors startingColor="#00ff00" />
        <PreviousColors startingColor="#00ffff" />
        <PreviousColors startingColor="#0080ff" />
        <PreviousColors startingColor="#0000ff" />
        <PreviousColors startingColor="#7f00ff" />
        <PreviousColors startingColor="#ff00ff" />
        <PreviousColors startingColor="#000000" />
        <PreviousColors startingColor="#ffffff" />
      </div>
    );
  }
}

export default PreviousColorsGrid;
