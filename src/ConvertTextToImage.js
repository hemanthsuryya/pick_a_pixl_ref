import React from "react";
import ReactDOM from "react-dom";
import Pixel from "./Pixel";

import "./styles.css";

class ConvertTextToImage extends React.Component {
  constructor(props) {
    super(props);

    this.convertText = this.convertText.bind(this);
  }

  convertText(e) {
    var textToConvert = document.getElementById("textbox").value;

    var i;
    var j = 1;
    for (i = 0; i < 400 * 3; i++) {
      var R = textToConvert.charCodeAt(i).toString(16);
      if (R === "NaN") {
        R = "00";
      }
      i++;
      var G = textToConvert.charCodeAt(i).toString(16);
      if (G === "NaN") {
        G = "00";
      }
      i++;
      var B = textToConvert.charCodeAt(i).toString(16);
      if (B === "NaN") {
        B = "00";
      }
      var hexCode = "#" + R + G + B + "";
      var element = document.querySelectorAll('[location="' + j + '"]');
      console.log(element[0]);
      element[0].setAttribute("color", hexCode);
      element[0].style.backgroundColor = hexCode;
      j++;
    }
  }

  render() {
    return (
      <div>
        <input id="textbox" type="textbox" />
        <button onClick={this.convertText}>SUBMIT</button>
      </div>
    );
  }
}

export default ConvertTextToImage;
