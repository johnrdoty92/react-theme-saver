import React from "react";
import styled from "styled-components";


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

export const ColorSwatch = styled.span.attrs((props) => ({
  style: {
    background: props.color,
  },
}))`
  display: inline-block;
  vertical-align: middle;
  width: 1.1em;
  height: 1.1em;
  margin-left: 8px;
  border: 1px solid black;
  box-shadow: 2px 2px black;
`;

export default ColorSwatchDisplay;
