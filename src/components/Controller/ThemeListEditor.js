import { useRef, useState, useEffect } from "react";
import { FlexRow } from "../StyledComponents";
//props.colors has all the color data to be pushed into local state
const ThemeListEditor = (props) => {
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
    alert(`${themeName} was successfuly saved into local storage!`);
    setThemeName("");
  }

  function handleLoadTheme() {
    //Get all the themes
    const localThemes = JSON.parse(localStorage.getItem("themes"));
    //Find the one with the same name as the select
    const themeToLoad = localThemes.find((elem) => {
      return elem.themeName === selectInputRef.current.value;
    });
    //Once theme is pulled from local storage, pass it to Controller
    props.loadTheme(themeToLoad.colors);
  }

  function handleDeleteTheme() {
    //Prevent deletion of Default Theme
    if (selectInputRef.current.value === "Default Theme") {
      alert("Default cannot be deleted");
      return;
    }
    //Filter out the theme to delete
    const filteredThemes = JSON.parse(localStorage.getItem("themes")).filter(
      (theme) => {
        return theme.themeName !== selectInputRef.current.value;
      }
    );
    //Update localStorage and themeNameList for select input
    localStorage.setItem("themes", JSON.stringify(filteredThemes));
    setThemeNameList(filteredThemes.map((theme) => theme.themeName));
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
