import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Controller from "./components/Controller/Controller";
import Aside from "./components/Aside";
import Post from "./components/Post";
import Footer from "./components/Footer";
import defaultTheme from "./components/Controller/DefaultTheme";

const App = () => {
  const [colors, setColors] = useState(defaultTheme[0].colors);
  const [header, setHeader] = useState(defaultTheme[0].themeName);
  
  function handleThemeChange(newTheme) {
    setColors(newTheme);
  }
  function handleHeaderChange(newHeader) {
    console.log("Header was changed to", newHeader);
    setHeader(newHeader);
  }

  return (
    <MainContainer>
      <GlobalStyle />
      <Header colors={colors} header={header} />
      <Navbar colors={colors} />
      <Controller
        onColorChange={handleThemeChange}
        onHeaderChange={handleHeaderChange}
        colors={colors}
        header={header}
      />
      <Aside colors={colors} />
      <Post colors={colors} />
      <Footer colors={colors} />
    </MainContainer>
  );
};

//=============STYLED COMPONENTS============
const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
`;
const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 4em 2em minmax(31em, 39.5em) minmax(20em, 25em) 3em;
  grid-template-areas:
    "header header"
    "nav nav"
    "controller post"
    "aside post"
    "footer footer";

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 4em 2em auto auto auto 3em;
    grid-template-areas:
      "header"
      "nav"
      "controller"
      "post"
      "aside"
      "footer";
  } ;
`;

export default App;
