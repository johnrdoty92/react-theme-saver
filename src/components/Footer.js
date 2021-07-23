import { StyledFooter } from "./StyledComponents";

const Footer = (props) => {
  return (
    <StyledFooter bgColor={props.colors.theme} textColor={props.colors.textColor} area="footer">
      <h3>Created by John Doty</h3>
    </StyledFooter>
  );
};

export default Footer;
