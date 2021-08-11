import React, { Component } from "react";
import { MainContainer, GlobalStyle } from "./components/StyledComponents";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Controller from "./components/Controller/Controller";
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
        highlight: "#ececec",
        shadow1: "#222222",
        shadow2: "#656565",
        faded: "#878787",
      },
    };
  }
  componentDidMount() {
    //Check browser compatability for localStorage
    // Tiffany Note: It's not necessary to check every single browser api for what browser to support,
    // sometimes it's fine to disregard if your product itself doesn't support those browsers.
    // These days it's customary to support the last two versions of each browser
    if (typeof Storage === "undefined") {
      return;
    }
    //Storage is good, but check if "themes" key exists
    if (!localStorage.themes) {
      const defaultTheme = [this.state];
      localStorage.setItem("themes", JSON.stringify(defaultTheme));
    } else {
      // Tiffany Note: You can be more defensive because localStore.themes (or even JSON.parse itself) may not be an array (users can mess with it).
      // You should be more defensive with anything that users can interact with. Look into optional chaining
      const themes = JSON.parse(localStorage.themes).map(
        (theme) => theme.themeName
      );
      this.setState({ themes });
    }
  }

  handleThemeChange = (newTheme) => {
    this.setState({
      colors: newTheme,
    });
  };
  handleHeaderChange = (newHeader) => {
    console.log("Header was changed to", newHeader);
    this.setState({
      themeName: newHeader,
    });
  };

  render() {
    const { colors, themeName, themes } = this.state;
    return (
      <MainContainer>
        <GlobalStyle />
        <Header colors={colors} header={themeName} />
        <Navbar colors={colors} />
        <Controller
          onSubmit={this.handleSave}
          onColorChange={this.handleThemeChange}
          onHeaderChange={this.handleHeaderChange}
          onClick={this.handleLoadAndDelete}
          colors={colors}
          themeNames={themes}
        />
        <Aside colors={colors} />
        <Post colors={colors} />
        <Footer colors={colors} />
      </MainContainer>
    );
  }
}

export default App;
