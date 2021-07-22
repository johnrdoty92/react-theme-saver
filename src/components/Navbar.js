import React from "react";
import { StyledNavbar, NavItem } from "./StyledComponents";
export default function Navbar(props) {
  return (
    <StyledNavbar
      textColor={props.textColor}
      bgColor={props.bgColor}
      area="nav"
    >
      <NavItem active={props.active} textColor={props.textColor}>
        <a href="#">Home</a>
      </NavItem>
      <NavItem active={props.active} textColor={props.textColor}>
        <a href="#">About</a>
      </NavItem>
      <NavItem active={props.active} textColor={props.textColor}>
        <a href="#">Contact</a>
      </NavItem>
    </StyledNavbar>
  );
}
