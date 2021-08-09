import React, { Component } from "react";
import { ColorSwatch } from "../StyledComponents";

const ColorSwatchDisplay = (props) => {
  return (
    <React.Fragment>
      <h4>3. Copy your colors:</h4>
      <p>
        Highlight: {props.colors.highlight}
        <ColorSwatch color={props.colors.highlight} />
      </p>
      <p>
        Theme: {props.colors.theme}
        <ColorSwatch color={props.colors.theme} />
      </p>
      <p>
        Dark: {props.colors.shadow1}
        <ColorSwatch color={props.colors.shadow1} />
      </p>
      <p>
        Darker: {props.colors.shadow2}
        <ColorSwatch color={props.colors.shadow2} />
      </p>
      <p>
        Faded: {props.colors.faded}
        <ColorSwatch color={props.colors.faded} />
      </p>
    </React.Fragment>
  );
};

export default ColorSwatchDisplay;
