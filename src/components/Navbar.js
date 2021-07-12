import React from "react";
import { StyledNavbar, NavItem } from "./StyledComponents";
export default function Navbar(props) {
  return (
    <StyledNavbar textColor={props.textColor} bgColor={props.bgColor} area="nav">
      <NavItem>Home</NavItem>
      <NavItem>About</NavItem>
      <NavItem>Blog</NavItem>
      <NavItem>Contact</NavItem>
    </StyledNavbar>
  );
}
