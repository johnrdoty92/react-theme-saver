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

  handleSave = async (e) => {
    e.preventDefault();
    // Tiffany Note: A better way to do the line below is to create a ref on the user input field, and on change, store that as themeName
    const themeName = e.target[3].value; //value of user's input text
    const themes = JSON.parse(localStorage.getItem("themes")); //array of all saved themes

    //Checks if theme name already exists
    if (themes.some((element) => element.themeName === themeName)) {
      alert("A theme with that name already exists");
      return;
    }
    //Theme name is good, so push name into themes array and set state
    // Tiffany Note: This can be done without asynchronously awaiting by passing in a second argument to setState,
    // which gets called after the setState is completed
    await this.setState({
      themeName: themeName,
      themes: this.state.themes.concat([themeName]),
    });
    //And save into localStorage
    // Tiffany Note: I think pushing your entire state into here is redundant and causes your data structure to be weirdly nested.
    // The only thing that should go in this array are an array of themes, which are {color, themeName}
    // They all currently have a nested themes property in there.
    themes.push(this.state);
    localStorage.setItem("themes", JSON.stringify(themes));
  };

  // Tiffany Note: Split this out into two functions instead of looking at textContent of the button to figure out what each button is doing
  // because it is presentation data and overly complicates its function (line 82 onwards)
  handleLoadAndDelete = (e) => {
    // Tiffany Note: In order to get input value, you can place a ref like described on line 51
    const loadThemeName = e.target.form[5].value; //value from select drop down
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
        //Prevent deletion of Default Theme
        if (localThemes[loadThemeIndex].themeName === "Default Theme") {
          alert("Default cannot be deleted");
          break;
        }
        const themesIndex = this.state.themes.findIndex(
          (elem) => elem === localThemes[loadThemeIndex].themeName
        );
        //Remove theme name from state and localStorage
        let newThemes = [...this.state.themes];
        newThemes.splice(themesIndex, 1);
        localThemes.splice(loadThemeIndex, 1);
        localStorage.setItem("themes", JSON.stringify(localThemes));
        this.setState({ themes: newThemes });
        break;

      default:
        // Tiffany Note: If you split out the two functionalities, you will never have this case
        console.log("Button says something other than 'Load' or 'Delete'");
    }
  };

  handleChange = (event) => {
    // Tiffany Note: in order to get the element type value, it's preferred not to get things directly
    // from the DOM but to shift your selected state. In Controller, I'd have a state for whether
    // Complementary or Single Tone is selected (you can pass state down from this component too for
    // access to the variable), and do the work below on that state
    const invert =
      document.forms.controller.elements["type"].value === "Complementary";
    const selectedColor = new ThemeColors(event.target.value, invert);

    this.setState({
      colors: selectedColor.colors,
    });
  };

  render() {
    // Tiffany Note: You can pull out themeName and themes from state here too
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
