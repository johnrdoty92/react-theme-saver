import { StyledAside, FullContainer } from "./StyledComponents";

const Aside = (props) => {
  return (
    <FullContainer area="aside">
      <StyledAside textColor={props.textColor} bgColor={props.bgColor}>
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
