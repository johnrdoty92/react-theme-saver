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
        loadTheme={handleLoadColors}
        changeHeader={props.onHeaderChange}
      />
    ) : (
      <p>Sorry, your browser does not support localStorage</p>
    );
  const [colorScheme, setColorScheme] = useState("SingleTone");
  const [colors, setColors] = useState(props.colors);

  //Update colors for all HTML elements
  useEffect(() => {
    props.onColorChange(colors);
  }, [colors]);
  //Update colors after changing color scheme
  useEffect(() => {
    const invert = colorScheme === "Complementary";
    const newTheme = new ThemeColors(colors.theme, invert);
    setColors(newTheme.colors);
  }, [colorScheme]);

  function handleChooseColor(e) {
    const invert = colorScheme === "Complementary";
    const newTheme = new ThemeColors(e.target.value, invert);
    setColors(newTheme.colors);
  }
  function handleChooseScheme(e) {
    setColorScheme(e.target.value);
  }
  function handleLoadColors(colors) {
    setColors(colors);
  }

  return (
    <FullContainer area="controller">
      <StyledForm colors={colors} name="controller">
        <ColorScheme onChange={handleChooseScheme} />
        <ChooseColor onChange={handleChooseColor} />
        <ColorSwatchDisplay colors={colors} />
        {themeListEditor}
      </StyledForm>
    </FullContainer>
  );
};

export default Controller;
