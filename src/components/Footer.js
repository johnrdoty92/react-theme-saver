import { StyledFooter } from "./StyledComponents";

const Footer = (props) => {
  return (
    <StyledFooter colors={props.colors} area="footer">
      <h3>Created by John Doty</h3>
    </StyledFooter>
  );
};

export default Footer;
