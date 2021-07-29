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
      themes: ["Default Theme"],
    };
  }
  componentDidMount() {
    if (!localStorage.themes) {
      const defaultTheme = [this.state];
      localStorage.setItem("themes", JSON.stringify(defaultTheme));
    } else {
      console.log("Default is already set");
      const themes = JSON.parse(localStorage.themes).map(
        (theme) => theme.themeName
      );
      this.setState({ themes: themes });
    }
  }

  handleSave = async (e) => {
    e.preventDefault();
    const themeName = e.target[3].value;
    const themes = JSON.parse(localStorage.getItem("themes"));

    //Checks if theme name already exists
    if (themes.some((element) => element.themeName === themeName)) {
      alert("A theme with that name already exists");
      return;
    }
    //Theme name is good, so push name into themes array and set state
    await this.setState({
      themeName: themeName,
      themes: this.state.themes.concat([themeName]),
    });
    //And save into localStorage
    themes.push(this.state);
    localStorage.setItem("themes", JSON.stringify(themes));
  };

  handleLoadAndDelete = (e) => {
    const loadThemeName = e.target.form[5].value;
    const localThemes = JSON.parse(localStorage.getItem("themes")); //Array of all themes in localStorage
    const loadThemeIndex = localThemes.findIndex((elem) => {
      return elem.themeName === loadThemeName;
    });
    switch (e.target.textContent) {
      case "Load":
        this.setState({
          colors: localThemes[loadThemeIndex].colors,
          themeName: localThemes[loadThemeIndex].themeName,
        });
        break;
      case "Delete":
        if (localThemes[loadThemeIndex].themeName === "Default Theme") {
          alert("Default cannot be deleted");
          break;
        }
        const themesIndex = this.state.themes.findIndex(
          (elem) => elem === localThemes[loadThemeIndex].themeName
        );
        let newThemes = [...this.state.themes];
        newThemes.splice(themesIndex, 1);
        localThemes.splice(loadThemeIndex, 1);
        localStorage.setItem("themes", JSON.stringify(localThemes));
        this.setState({ themes: newThemes });
        break;
      default:
        console.log("Button says something other than 'Load' or 'Delete'");
    }
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
          onClick={this.handleLoadAndDelete}
          colors={colors}
          themeNames={this.state.themes}
        />
        <Aside colors={colors} />
        <Post colors={colors} />
        <Footer colors={colors} />
      </MainContainer>
    );
  }
}

export default App;
