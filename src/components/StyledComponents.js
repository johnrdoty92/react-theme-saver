import styled from "styled-components";

export const FullContainer = styled.div.attrs((props) => ({
  style: {
    background: props.bgColor,
  },
}))`
  width: 100%;
  display: flex;
  justify-content: center;
  grid-area: ${(props) => props.area};
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-evenly;

  * {
    flex-basis: 100%;
  }
`;
export const FlexColumn = styled.div`
  width: 100%;
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;

  * {
    flex-basis: 100%;
  }
`;
