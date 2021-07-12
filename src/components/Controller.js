import { FullContainer, StyledForm } from "./StyledComponents";

const Controller = (props) => {
  return (
    <FullContainer area="controller">
      <StyledForm>
        <div>
          <input type="radio" value="Complementary" />
          <label for="html">Complementary</label>
        </div>
        <div>
          <input type="radio" value="SingleTone" />
          <label for="html">Single Tone</label>
        </div>
        <p>Choose a color:</p>
        <input type="color" onChange={props.onChange} />
        <button type="submit">Save Preset</button>
      </StyledForm>
    </FullContainer>
  );
};

export default Controller;
