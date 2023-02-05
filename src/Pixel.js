import React from "react";
import ReactDOM from "react-dom";
import MouseState from "./MouseState";

import "./styles.css";

class Pixel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: this.props.color,
      color_id: 1
    };

    this.changeColor = this.changeColor.bind(this);
    this.changeColorDraw = this.changeColorDraw.bind(this);
  }

  changeColor(e) {
    var pickerColor = document.getElementById("myColor").value;
    // check for right click
    if (e.buttons === 2) {
      document.getElementById("myColor").value = this.state.color;
    } else {
      this.setState({
        color: pickerColor
      });
    }
  }

  changeColorDraw(e) {
    if (e.buttons == 1 || e.buttons == 3) {
      var pickerColor = document.getElementById("myColor").value;
      this.setState({
        color: pickerColor
      });
    }
  }

  render() {
    const pixelStyle = {
      backgroundColor: this.state.color
    };
    return (
      <div
        id="pixel"
        location={this.props.location}
        color_id={this.state.color_id}
        color={this.state.color}
        style={pixelStyle}
        onMouseDown={this.changeColor}
        onMouseEnter={this.changeColorDraw}
      />
    );
  }
}

export default Pixel;
