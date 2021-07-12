import { StyledAside, FullContainer } from "./StyledComponents";

const Aside = () => {
  return (
    <FullContainer area="aside">
      <StyledAside>
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
