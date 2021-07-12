import React from "react";
import styled from "styled-components";
import { StyledHeader, FullContainer } from "./StyledComponents";

export default function Header(props) {
  return (
    <FullContainer bgColor={props.bgColor} area="header">
      <StyledHeader>{props.header}</StyledHeader>
    </FullContainer>
  );
}
