import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class PreviousColors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: this.props.startingColor
    };

    this.SetColor = this.SetColor.bind(this);
  }

  SetColor(e) {
    if (e.buttons == 2) {
      var pickerColor = document.getElementById("myColor").value;
      this.setState({
        color: pickerColor
      });
    } else if (e.buttons == 1 || e.buttons == 3) {
      this.GetColor(e);
    }
  }
  GetColor(e) {
    document.getElementById("myColor").value = this.state.color;
  }

  render() {
    const buttonStyle = {
      backgroundColor: this.state.color,
      height: "50px",
      width: "50px",
      border: "solid 3px black"
    };
    return (
      <div id="Colors">
        <button style={buttonStyle} onMouseDown={this.SetColor} id="color1" />
      </div>
    );
  }
}

export default PreviousColors;
