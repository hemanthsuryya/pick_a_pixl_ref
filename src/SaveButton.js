import React from "react";
import ReactDOM from "react-dom";
import Pixel from "./Pixel";
import { string } from "prop-types";

const hexToRgb = hex =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16));

class SaveButton extends React.Component {
  constructor(props) {
    super(props);

    this.saveImage = this.saveImage.bind(this);
  }
  saveImage(e) {
    var artString = "";
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.canvas.width = 640;
    ctx.canvas.height = 640;
    var imgData = ctx.createImageData(640, 640);
    var i;
    var j = 1;
    var k = 1;
    var scale = 32;
    // single pixel loop
    for (i = 0; i < imgData.data.length; i += 4 * scale) {
      // convert pixel in grid from hex to rgb
      var element = document.querySelectorAll('[location="' + j + '"]');
      var hex = element[0].getAttribute("color");
      var rgb = hexToRgb(hex);
      var l;

      for (l = 0; l < 4 * scale; l++) {
        imgData.data[i + l] = rgb[0];
        l++;
        imgData.data[i + l] = rgb[1];
        l++;
        imgData.data[i + l] = rgb[2];
        l++;
        imgData.data[i + l] = 255;
      }

      if (j % 20 === 0) {
        if (k % scale !== 0) {
          j -= 19;
        } else {
          j++;
        }
        k++;
      } else {
        j++;
        artString += String.fromCharCode(rgb[0]);
        artString += String.fromCharCode(rgb[1]);
        artString += String.fromCharCode(rgb[2]);
      }
    }
    ctx.putImageData(imgData, 0, 0);
    var img = c.toDataURL("image/png");
    //document.write(
    // '<img style="padding: 3px; border: solid 3px black;" src="' + img + '"/>'
    //);
    console.log(artString);
  }
  render() {
    const buttonStyle = {
      height: "50px",
      width: "200px",
      fontSize: "25px",
      fontFamily: "sans-serif",
      backgroundColor: "white"
    };
    return (
      <button style={buttonStyle} onClick={this.saveImage}>
        SAVE
      </button>
    );
  }
}

export default SaveButton;
