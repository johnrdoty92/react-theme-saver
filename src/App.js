import React, { useState } from "react";
import { MainContainer, GlobalStyle } from "./components/StyledComponents";
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

export default App;
