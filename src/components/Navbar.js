import React from "react";
import { StyledNavbar, NavItem } from "./StyledComponents";
export default function Navbar(props) {
  return (
    <StyledNavbar
      textColor={props.colors.textColor}
      bgColor={props.colors.shadow2}
      area="nav"
    >
      <NavItem active={props.colors.shadow1} textColor={props.colors.textColor}>
        <a href="#">Home</a>
      </NavItem>
      <NavItem active={props.colors.shadow1} textColor={props.colors.textColor}>
        <a href="#">About</a>
      </NavItem>
      <NavItem active={props.colors.shadow1} textColor={props.colors.textColor}>
        <a href="#">Contact</a>
      </NavItem>
    </StyledNavbar>
  );
}
