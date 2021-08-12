import React, { useState, useEffect } from "react";
import { FullContainer, StyledForm } from "../StyledComponents";
import ThemeColors from "../../classes/ColorCalculator";
import ThemeListEditor from "./ThemeListEditor";
import ColorScheme from "./ColorScheme";
import ChooseColor from "./ChooseColor";
import ColorSwatchDisplay from "./ColorSwatchDisplay";

const Controller = (props) => {
  const themeListEditor =
    typeof Storage !== "undefined" ? (
      <ThemeListEditor
        colors={props.colors}
        header={props.header}
        loadTheme={handleLoadColors}
        changeHeader={props.onHeaderChange}
      />
    ) : (
      <p>Sorry, your browser does not support localStorage</p>
    );
    
  //=======STATE VARIABLES=======
  const [colorScheme, setColorScheme] = useState("SingleTone");

  //=======HANDLE CHANGES IN COLOR=======
  useEffect(() => {
    const invert = colorScheme === "Complementary";
    const newTheme = new ThemeColors(props.colors.theme, invert);
    props.onColorChange(newTheme.colors);
  }, [colorScheme]);
  function handleChooseColor(e) {
    const invert = colorScheme === "Complementary";
    const newTheme = new ThemeColors(e.target.value, invert);
    props.onColorChange(newTheme.colors);
  }
  function handleChooseScheme(e) {
    setColorScheme(e.target.value);
  }
  function handleLoadColors(colors) {
    props.onColorChange(colors);
  }

  return (
    <FullContainer area="controller">
      <StyledForm
        colors={props.colors}
        name="controller"
        onSubmit={(e) => e.preventDefault()}
      >
        <ColorScheme onChange={handleChooseScheme} />
        <ChooseColor onChange={handleChooseColor} />
        <ColorSwatchDisplay colors={props.colors} />
        {themeListEditor}
      </StyledForm>
    </FullContainer>
  );
};

export default Controller;
