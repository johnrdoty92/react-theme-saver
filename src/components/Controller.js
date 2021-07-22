import { FullContainer, StyledForm } from "./StyledComponents";

const Controller = (props) => {
  return (
    <FullContainer area="controller">
      <StyledForm
        bgColor={props.bgColor}
        textColor={props.textColor}
        name="controller"
      >
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
        <p>Choose a color:</p>
        <input type="color" onChange={props.onChange} />
        <p>Current color: {props.currentColor}</p>
        <button type="submit">Save Preset</button>
      </StyledForm>
    </FullContainer>
  );
};

export default Controller;
