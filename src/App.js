import "./App.css";
import React, { Component } from "react";
import { MainContainer, GlobalStyle } from "./components/StyledComponents";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Controller from "./components/Controller";
import Aside from "./components/Aside";
import Post from "./components/Post";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themeName: "Default Theme",
      colors: {
        theme: "#878787",
        highlight1: "#ececec",
        highlight2: "#a9a9a9",
        shadow1: "#222222",
        shadow2: "#656565",
        faded: "#878787",
        textColor: "white",
      },
    };
  }
  handleChange = (event) => {
    const parsedColor = hexToRGB(event.target.value);
    const highlight1 = adjustLuminosity(parsedColor, 0.75);
    const shadow1 = adjustLuminosity(parsedColor, -0.75);
    const mode = document.forms.controller.elements["type"].value;

    const highlight2 =
      mode === "Complementary"
        ? invertColor(parsedColor)
        : adjustLuminosity(parsedColor, 0.25);

    const shadow2 =
      mode === "Complementary"
        ? invertColor(hexToRGB(shadow1))
        : adjustLuminosity(parsedColor, -0.25);

    this.setState({
      colors: {
        theme: event.target.value,
        highlight1: highlight1,
        highlight2: highlight2,
        shadow1: shadow1,
        shadow2: shadow2,
        faded: adjustSaturation(parsedColor, 0.5),
        textColor:
          parsedColor[0] + parsedColor[1] + parsedColor[2] < 400
            ? "white"
            : "black",
      },
    });
    // console.log(document.forms.controller.elements["type"].value);
  };

  render() {
    const { colors } = this.state;
    return (
      <MainContainer>
        <GlobalStyle />
        <Header colors={colors} header={this.state.themeName} />
        <Navbar colors={colors} />
        <Controller onChange={this.handleChange} colors={colors} />
        <Aside colors={colors} />
        <Post colors={colors} />
        <Footer colors={colors} />
      </MainContainer>
    );
  }
}

function hexToRGB(hexColor) {
  let r = parseInt(hexColor.slice(1, 3), 16);
  let g = parseInt(hexColor.slice(3, 5), 16);
  let b = parseInt(hexColor.slice(5), 16);
  return [r, g, b];
}

function rgbToHex(rgbArray) {
  let hex = "#";
  rgbArray.forEach((colorVal) => {
    let c = colorVal.toString(16);
    if (c.length < 2) {
      c = "0" + c;
    }
    hex += c;
  });
  return hex;
}

function adjustLuminosity(rgbArray, percentage) {
  let c;
  const newColor = rgbArray.map((colorVal) => {
    c = Math.round(
      Math.min(Math.max(0, colorVal + colorVal * percentage), 255)
    ).toString(16);
    if (c.length < 2) {
      return "0" + c;
    } else {
      return c;
    }
  });
  return "#" + newColor.join("");
}

function adjustSaturation(rgbArray, percentage) {
  let hex;
  const max = Math.max(...rgbArray);
  const newColor = rgbArray.map((colorVal) => {
    if (max === colorVal) {
      hex = colorVal.toString(16);
    } else {
      hex = Math.round(colorVal + (max - colorVal) * percentage).toString(16);
    }
    return hex.length < 2 ? "0" + hex : hex;
  });
  return "#" + newColor.join("");
}

function invertColor(rgbArray) {
  let hex = "#";
  let c;
  rgbArray.forEach((colorVal) => {
    c = (255 - colorVal).toString(16);
    if (c.length < 2) {
      c = "0" + c;
    }
    hex += c;
  });
  return hex;
}

export default App;
