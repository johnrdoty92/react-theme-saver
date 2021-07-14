import React from "react";
import styled from "styled-components";
import { StyledTextBlock, FullContainer } from "./StyledComponents";

const CodeBlock = (props) => {
  return (
    <StyledTextBlock bgColor="black" textColor="white" borderColor="grey">
      <code>
        const greeting = "Hello World!";
        <br />
        <br />
        alert(greeting);
      </code>
    </StyledTextBlock>
  );
};

export default CodeBlock;
