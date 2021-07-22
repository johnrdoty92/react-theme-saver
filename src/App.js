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
      theme: "#000000",
      highlight1: "",
      highlight2: "",
      shadow1: "",
      shadow2: "",
      textColor: "",
    };
  }
  handleChange = (event) => {
    let parsedColor = parseRGB(event.target.value);

    this.setState({
      theme: event.target.value,
      highlight1: adjustLuminosity(parsedColor, 0.75),
      highlight2: adjustLuminosity(parsedColor, 0.25),
      shadow1: adjustLuminosity(parsedColor, -0.75),
      shadow2: adjustLuminosity(parsedColor, -0.25),
      textColor:
        parsedColor[0] + parsedColor[1] + parsedColor[2] < 400
          ? "white"
          : "black",
    });
    // console.log(document.forms.controller.elements["type"].value);
  };

  render() {
    return (
      <MainContainer>
        <GlobalStyle />
        <Header
          textColor={this.state.textColor}
          bgColor={this.state.theme}
          header={this.state.themeName}
        />
        <Navbar
          active={this.state.highlight1}
          textColor={this.state.textColor}
          bgColor={this.state.shadow2}
        />
        <Controller
          onChange={this.handleChange}
          currentColor={this.state.theme}
          bgColor={this.state.highlight1}
          textColor={this.state.textColor}
        />
        <Aside
          bgColor={this.state.highlight1}
          textColor={this.state.textColor}
        />
        <Post
          bgColor={this.state.highlight1}
          borderColor={this.state.shadow2}
          textColor={this.state.textColor}
        />
        <Footer bgColor={this.state.shadow2} />
      </MainContainer>
    );
  }
}

function parseRGB(hexColor) {
  let r = parseInt(hexColor.slice(1, 3), 16);
  let g = parseInt(hexColor.slice(3, 5), 16);
  let b = parseInt(hexColor.slice(5), 16);
  return [r, g, b];
}

function adjustLuminosity(rgbArray, scale) {
  const newColor = rgbArray.map((colorVal) => {
    let c = Math.round(
      Math.min(Math.max(0, colorVal + colorVal * scale), 255)
    ).toString(16);
    if (c.length < 2) {
      return "0" + c;
    } else {
      return c;
    }
  });
  return "#" + newColor.join("");
}

export default App;
