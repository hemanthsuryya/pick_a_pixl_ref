import React from "react";
import ReactDOM from "react-dom";
import Pixel from "./Pixel";

class MouseState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canDraw: false
    };
  }
}
