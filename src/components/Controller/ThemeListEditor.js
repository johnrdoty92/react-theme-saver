import { useRef, useState } from "react";
import { FlexRow } from "../StyledComponents";
import defaultTheme from "./DefaultTheme";
const validate = require("jsonschema").validate;
const schema = require("./ThemeColorsSchema.json");

//Checks for invalid data stored in localStorage.themes
function validateStorage() {
  if (!localStorage?.themes) {
    console.log("Creating default theme...");
    localStorage.setItem("themes", JSON.stringify(defaultTheme));
  }
  const themesAreValid = validate(JSON.parse(localStorage.themes), schema, {
    required: true,
  }).valid;
  if (!themesAreValid) {
    console.log("Reverting back to default...");
    localStorage.setItem("themes", JSON.stringify(defaultTheme));
  }
}
const ThemeListEditor = (props) => {
  validateStorage();
  const selectInputRef = useRef();
  const [themeName, setThemeName] = useState("");
  const [themeNameList, setThemeNameList] = useState(
    JSON.parse(localStorage.themes).map((theme) => theme.themeName)
  );
  const themes = themeNameList.map((theme) => {
    return (
      <option key={theme} value={theme}>
        {theme}
      </option>
    );
  });

  function handleSaveTheme() {
    validateStorage();
    const themes = JSON.parse(localStorage.getItem("themes"));
    //Checks if theme name already exists
    if (themes.some((element) => element.themeName === themeName)) {
      alert("A theme with that name already exists");
      return;
    }
    //Theme name is unique, pass it to App to use for header and add theme to localStorage
    themes.push({ themeName: themeName, colors: props.colors });
    localStorage.setItem("themes", JSON.stringify(themes));
    setThemeNameList((prevThemeList) => [...prevThemeList, themeName]);
    //Change the header to the theme name
    props.changeHeader(themeName);
    alert(`${themeName} was successfuly saved into local storage!`);
    setThemeName("");
  }

  function handleLoadTheme() {
    validateStorage();
    const localThemes = JSON.parse(localStorage.getItem("themes"));
    const themeToLoad = localThemes.find((elem) => {
      return elem.themeName === selectInputRef.current.value;
    });
    if (themeToLoad) {
      props.loadTheme(themeToLoad.colors);
      props.changeHeader(themeToLoad.themeName);
      return;
    }
    alert("Something went wrong. Please refresh and try again");
  }

  function handleDeleteTheme() {
    validateStorage();
    //Prevent deletion of Default Theme
    if (selectInputRef.current.value === "Default Theme") {
      alert("Default cannot be deleted");
      return;
    }
    //Remove the theme to delete
    const filteredThemes = JSON.parse(localStorage.getItem("themes")).filter(
      (theme) => {
        return theme.themeName !== selectInputRef.current.value;
      }
    );
    //Update localStorage and themeNameList for select input
    localStorage.setItem("themes", JSON.stringify(filteredThemes));
    setThemeNameList(filteredThemes.map((theme) => theme.themeName));
    alert(`"${selectInputRef.current.value}" was deleted!`);
  }

  return (
    <div className="save-load-delete">
      <h4>4. Save themes:</h4>
      <div className="submit-area">
        <input
          required
          onChange={(e) => setThemeName(e.target.value)}
          value={themeName}
          type="text"
          placeholder="Name your preset"
        ></input>
        <button type="button" onClick={handleSaveTheme}>
          Save Preset
        </button>
      </div>
      <h4>5. Load or delete themes:</h4>
      <FlexRow>
        <select ref={selectInputRef}>{themes}</select>
        <button type="button" onClick={handleLoadTheme}>
          Load
        </button>
        <button type="button" onClick={handleDeleteTheme}>
          Delete
        </button>
      </FlexRow>
    </div>
  );
};

export default ThemeListEditor;
