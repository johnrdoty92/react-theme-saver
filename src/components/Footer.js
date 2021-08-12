import styled from "styled-components";
import { getTextColor } from "../classes/ColorCalculator";

const Footer = (props) => {
  return (
    <StyledFooter colors={props.colors} area="footer">
      <h3>Created by John Doty</h3>
    </StyledFooter>
  );
};
export default Footer;

//=============STYLED COMPONENTS============
const StyledFooter = styled.footer.attrs((props) => ({
  style: {
    color: getTextColor(props.colors.theme),
    background: props.colors.theme,
  },
}))`
  margin-top: auto;
  width: 100%;
  grid-area: footer;
  margin-top: 0.5em;

  * {
    height: 40px;
    line-height: 40px;
    vertical-align: middle;
    text-align: center;
    width: 100%;
    margin: 0;
  }
`;