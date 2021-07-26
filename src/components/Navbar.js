import React from "react";
import { StyledNavbar, NavItem } from "./StyledComponents";
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
