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
      header: "Default Theme",
      themeColor: "",
      textColor: "",
      headerColor: "",
      bodyColor: "",
      darkColor: "",
    };
  }
  handleChange = async (event) => {
    let { value } = event.target;
    let r = value.slice(1, 3);
    let g = value.slice(3, 5);
    let b = value.slice(5);

    await this.setState({
      headerColor: event.target.value,
      themeColor: event.target.value,
      textColor:
        parseInt(r, 16) + parseInt(g, 16) + parseInt(b, 16) < 200
          ? "white"
          : "black",
    });
    console.log("Changed", event.target.value);
  };

  render() {
    return (
      <MainContainer>
        <GlobalStyle />
        <Header bgColor={this.state.headerColor} header={this.state.header} />
        <Navbar
          textColor={this.state.textColor}
          bgColor={this.state.themeColor}
        />
        <Controller onChange={this.handleChange} />
        <Aside />
        <Post />
        <Footer />
      </MainContainer>
    );
  }
}

export default App;
