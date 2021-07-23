import React from "react";
import { StyledHeader, FullContainer } from "./StyledComponents";

export default function Header(props) {
  return (
    <FullContainer bgColor={props.colors.theme} area="header">
      <StyledHeader colors={props.colors}>{props.header}</StyledHeader>
    </FullContainer>
  );
}
