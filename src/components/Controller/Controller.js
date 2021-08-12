import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getTextColor } from "../../classes/ColorCalculator";
import { FullContainer } from "../StyledComponents";
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

//=============STYLED COMPONENTS============
const StyledForm = styled.form.attrs((props) => ({
  style: {
    background: props.colors.faded,
    color: getTextColor(props.colors.faded),
  },
}))`
  width: 90%;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.1);
  margin: 1.5rem 1.5rem 0 1.5rem;

  & * {
    margin: 0.2rem 0;
  }
  .radio-button {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  .submit-area {
    display: flex;

    input {
      border-radius: 5px 0px 0px 5px;
      border: 1px solid black;
      padding: 5px;
    }
    button {
      border-radius: 0px 5px 5px 0px;
      border: 1px solid black;
      transition: all 0.2s;
      color: white;
      background: rgba(0, 0, 0, 0.5);
      &:hover {
        background: white;
        color: black;
      }
      &:active {
        background: grey;
      }
    }
  }
  .save-load-delete {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  h4 {
    text-align: center;
    text-transform: uppercase;
    padding: 5px;
    width: 95%;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.3);
  }
  input[type="color"] {
    width: 80%;
    min-height: 35px;
  }
  select {
    border-radius: 5px 0px 0px 5px;
    padding: 5px;
  }
  button[type="button"] {
    padding: 5px;
    border: 1px solid black;
    transition: all 0.2s;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    &:hover {
      background: white;
      color: black;
    }
    &:active {
      background: grey;
    }
    &:last-child {
      border-radius: 0px 5px 5px 0px;
    }
  }
`;