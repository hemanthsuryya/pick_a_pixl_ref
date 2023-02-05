import React from "react";
import ReactDOM from "react-dom";
import Grid from "./Grid";
import MouseState from "./MouseState";
import SaveButton from "./SaveButton.js";
import PreviousColorsGrid from "./PreviousColorsGrid.js";
import ConvertTextToImage from "./ConvertTextToImage";

ReactDOM.render(
  <div>
    <div>
      <Grid />
    </div>
    <div>
      <PreviousColorsGrid />
    </div>
    <div>
      <SaveButton />
    </div>
  </div>,
  document.querySelector("#container")
);
