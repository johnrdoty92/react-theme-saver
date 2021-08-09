import React, { Component, useState } from "react";
import { FullContainer, StyledForm, ColorSwatch } from "../StyledComponents";
import ThemeColors from "../../classes/ColorCalculator";
import ThemeListEditor from "./ThemeListEditor";
import ColorScheme from "./ColorScheme";
import ChooseColor from "./ChooseColor";
import ColorSwatchDisplay from "./ColorSwatchDisplay";

const Controller = (props) => {
  const themesController =
    typeof Storage !== "undefined" ? (
      <ThemeListEditor onClick={props.onClick} themeNames={props.themeNames} />
    ) : (
      <p>Sorry, your browser does not support localStorage</p>
    );

  const [colorScheme, setColorScheme] = useState("SingleTone");
  const [currentColor, setCurrentColor] = useState("#000000");
  const [colors, setColors] = useState({
    theme: "#878787",
    highlight: "#ececec",
    shadow1: "#222222",
    shadow2: "#656565",
    faded: "#878787",
  });

  function handleChooseColor(e) {
    setCurrentColor((prevColor) => prevColor[0] + e.target.value.slice(1));
    const newTheme = new ThemeColors(currentColor, false);
    setColors(newTheme.colors);
  }

  return (
    <FullContainer area="controller">
      <StyledForm
        onSubmit={props.onSubmit}
        colors={props.colors}
        name="controller"
      >
        <ColorScheme />
        <ChooseColor onChange={handleChooseColor} />
        <ColorSwatchDisplay colors={props.colors} />
        {themesController}
      </StyledForm>
    </FullContainer>
  );
};

export default Controller;
