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
  handleChange = async (event) => {
    let parsedColor = parseRGB(event.target.value);
    let [r, g, b] = parsedColor;

    await this.setState({
      theme: event.target.value,
      highlight1: brighten(parsedColor, 5),
      highlight2: brighten(parsedColor, 10),
      shadow1: darken(parsedColor, 5),
      shadow2: darken(parsedColor, 10),
      textColor: r + g + b < 200 ? "white" : "black",
    });
    // console.log(document.forms.controller.elements["type"].value);
  };

  render() {
    return (
      <MainContainer>
        <GlobalStyle />
        <Header bgColor={this.state.theme} header={this.state.themeName} />
        <Navbar
          textColor={this.state.textColor}
          bgColor={this.state.themeSub2}
        />
        <Controller
          onChange={this.handleChange}
          currentColor={this.state.theme}
        />
        <Aside bgColor={this.state.highlight1} />
        <Post
          bgColor={this.state.highlight1}
          borderColor={this.state.shadow2}
        />
        <Footer bgColor={this.state.themeSub2} />
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

function brighten(rgbArray, scale) {
  const newColor = rgbArray.map((colorVal) => {
    return Math.floor(colorVal + (255 - colorVal) / scale);
  });
  let newHex = "#";
  newColor.forEach((rgbValue) => (newHex += rgbValue.toString(16)));
  return newHex;
}

function darken(rgbArray, scale) {
  const newColor = rgbArray.map((colorVal) => {
    return Math.floor(colorVal - colorVal / scale);
  });
  let newHex = "#";
  newColor.forEach((rgbValue) => (newHex += rgbValue.toString(16)));
  return newHex;
}

export default App;
