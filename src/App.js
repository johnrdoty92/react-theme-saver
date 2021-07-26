import "./App.css";
import React, { Component } from "react";
import { MainContainer, GlobalStyle } from "./components/StyledComponents";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Controller from "./components/Controller";
import Aside from "./components/Aside";
import Post from "./components/Post";
import Footer from "./components/Footer";
import ThemeColors from "./classes/ThemeColors";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themeName: "Default Theme",
      colors: {
        theme: "#878787",
        highlight: "#ececec",
        shadow1: "#222222",
        shadow2: "#656565",
        faded: "#878787",
      },
      themes: [],
    };
  }

  handleSave = (event) => {
    event.preventDefault();
    console.log(event);
    if (Object.keys(localStorage).includes(event.target[3].value)) {
      alert("A theme with that name already exists.");
      return;
    }
    this.setState({ themeName: event.target[3].value });
    localStorage.setItem(
      event.target[3].value,
      JSON.stringify(this.state.colors)
    );
  };

  handleLoad = (event) => {
    console.log(event);
  };

  handleChange = (event) => {
    const invert =
      document.forms.controller.elements["type"].value === "Complementary";
    const selectedColor = new ThemeColors(event.target.value, invert);

    this.setState({
      colors: selectedColor.colors,
    });
  };

  render() {
    const { colors } = this.state;
    return (
      <MainContainer>
        <GlobalStyle />
        <Header colors={colors} header={this.state.themeName} />
        <Navbar colors={colors} />
        <Controller
          onSubmit={this.handleSave}
          onChange={this.handleChange}
          onLoad={this.handleLoad}
          colors={colors}
        />
        <Aside colors={colors} />
        <Post colors={colors} />
        <Footer colors={colors} />
      </MainContainer>
    );
  }
}

export default App;
