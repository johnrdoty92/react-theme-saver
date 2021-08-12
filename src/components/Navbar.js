import React from "react";
import styled from "styled-components";
import { getTextColor } from "../classes/ColorCalculator";

export default function Navbar(props) {
  return (
    <StyledNavbar
      textColor={props.colors.textColor}
      bgColor={props.colors.shadow2}
      area="nav"
    >
      <NavItem hover={props.colors.shadow1} active={props.colors.highlight}>
        <a href="https://github.com/johnrdoty92/react-theme-saver">Github Repo</a>
      </NavItem>
      <NavItem hover={props.colors.shadow1} active={props.colors.highlight}>
        <a href="mailto:johnrdoty92@gmail.com">Contact</a>
      </NavItem>
    </StyledNavbar>
  );
}

//=============STYLED COMPONENTS============
const StyledNavbar = styled.ul.attrs((props) => ({
  style: {
    background: props.bgColor,
    color: getTextColor(props.bgColor),
  },
}))`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-end;
  grid-area: nav;
  margin: 0;
  padding-right: 1em;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
`;

const NavItem = styled.li`
  display: block;
  height: 100%;
  line-height: 2em;
  a {
    padding: 0 1em;
    display: block;
    height: 100%;
    width: 100%;
    color: inherit;
    text-decoration: none;
    transition: 0.25s ease;
  }
  a:hover {
    color: white;
    background: rgba(0, 0, 0, 0.25);
  }
  a:active {
    color: black;
    background: rgba(255, 255, 255, 0.25);
  }
`;