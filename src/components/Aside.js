import { StyledAside, FullContainer } from "./StyledComponents";

const Aside = (props) => {
  return (
    <FullContainer area="aside">
      <StyledAside bgColor={props.bgColor}>
        <div>
          <h2>Blog Post #1</h2>
          <p>Description</p>
        </div>
        <hr />
        <div>
          <h2>Blog Post #2</h2>
          <p>Description</p>
        </div>
      </StyledAside>
    </FullContainer>
  );
};

export default Aside;
