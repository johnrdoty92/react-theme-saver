import { FullContainer, StyledForm } from "./StyledComponents";

const Controller = (props) => {
  return (
    <FullContainer area="controller">
      <StyledForm
        bgColor={props.bgColor}
        textColor={props.textColor}
        name="controller"
      >
        <h4>Choose a color:</h4>
        <input type="color" onChange={props.onChange} />
        <div>
          <input
            id="SingleTone"
            type="radio"
            value="SingleTone"
            name="type"
            defaultChecked
          />
          <label for="SingleTone">Single Tone</label>
        </div>
        <div>
          <input
            id="Complementary"
            type="radio"
            value="Complementary"
            name="type"
          />
          <label for="Complementary">Complementary</label>
        </div>
        <p>Current color: {props.currentColor}</p>
        <button type="submit">Save Preset</button>
      </StyledForm>
    </FullContainer>
  );
};

export default Controller;
