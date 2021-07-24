import { FullContainer, StyledForm, ColorSwatch } from "./StyledComponents";
import DropdownList from "./DropdownList";

const Controller = (props) => {
  return (
    <FullContainer area="controller">
      <StyledForm
        onSubmit={props.onSubmit}
        bgColor={props.colors.faded}
        textColor={props.colors.textColor}
        name="controller"
      >
        <h4>Choose a color:</h4>
        <input type="color" onChange={props.onChange} />
        <div className="radio-button">
          <input
            id="SingleTone"
            type="radio"
            value="SingleTone"
            name="type"
            defaultChecked
          />
          <label for="SingleTone">Single Tone</label>
        </div>
        <div className="radio-button">
          <input
            id="Complementary"
            type="radio"
            value="Complementary"
            name="type"
          />
          <label for="Complementary">Complementary</label>
        </div>
        <h4>Current Colors:</h4>
        <ColorSwatch color={props.colors.theme}>
          Theme color: {props.colors.theme}
        </ColorSwatch>
        <ColorSwatch color={props.colors.highlight1}>
          Highlight 1: {props.colors.highlight1}
        </ColorSwatch>
        <ColorSwatch color={props.colors.highlight2}>
          Highlight 2: {props.colors.highlight2}
        </ColorSwatch>
        <ColorSwatch color={props.colors.shadow1}>
          Shadow 1: {props.colors.shadow1}
        </ColorSwatch>
        <ColorSwatch color={props.colors.shadow2}>
          Shadow 2: {props.colors.shadow2}
        </ColorSwatch>
        <ColorSwatch color={props.colors.faded}>
          Faded color: {props.colors.faded}
        </ColorSwatch>
        <div className="submit-area">
          <input required type="text" placeholder="Name your preset"></input>
          <button type="submit">Save Preset</button>
        </div>
        <DropdownList />
      </StyledForm>
    </FullContainer>
  );
};

export default Controller;
