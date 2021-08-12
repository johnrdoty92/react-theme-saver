import React from "react";
import styled from "styled-components";
import { getTextColor } from "../classes/ColorCalculator";
import { FullContainer } from "./StyledComponents";

export default function Header(props) {
  return (
    <FullContainer bgColor={props.colors.theme} area="header">
      <StyledHeader colors={props.colors}>{props.header}</StyledHeader>
    </FullContainer>
  );
}
//=============STYLED COMPONENTS============
const StyledHeader = styled.h1.attrs((props) => ({
  style: {
    color: getTextColor(props.colors.theme),
  },
}))`
  margin: 0 auto;
  padding: 0.5rem 1rem;
  display: block;
  align-self: flex-end;
  width: max(90%, 35rem);
  text-align: center;
`;
