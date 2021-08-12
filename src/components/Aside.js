import styled from "styled-components";
import { getTextColor } from "../classes/ColorCalculator";
import { FullContainer } from "./StyledComponents";

const Aside = (props) => {
  return (
    <FullContainer area="aside">
      <StyledAside colors={props.colors}>
        <div>
          <h2>Blog Post #1</h2>
          <p>Sample Text</p>
        </div>
        <hr />
        <div>
          <h2>Blog Post #2</h2>
          <p>Sample Text</p>
        </div>
      </StyledAside>
    </FullContainer>
  );
};
export default Aside;

//=============STYLED COMPONENTS============
const StyledAside = styled.aside.attrs((props) => ({
  style: {
    background: props.colors.faded,
    color: getTextColor(props.colors.faded),
  },
}))`
  width: 90%;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.1);
  margin: 1rem 1.5rem 1.5rem 1.5rem;
`;
