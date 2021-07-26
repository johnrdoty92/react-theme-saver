import LoadAndDelete from "./LoadAndDelete";
import { FullContainer, StyledForm, ColorSwatch } from "./StyledComponents";

const Controller = (props) => {
  return (
    <FullContainer area="controller">
      <StyledForm
        onSubmit={props.onSubmit}
        colors={props.colors}
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
          <label htmlFor="SingleTone">Single Tone</label>
        </div>
        <div className="radio-button">
          <input
            id="Complementary"
            type="radio"
            value="Complementary"
            name="type"
          />
          <label htmlFor="Complementary">Complementary</label>
        </div>
        <h4>Current Colors:</h4>
        <p>
          Highlight: {props.colors.highlight}
          <ColorSwatch color={props.colors.highlight} />
        </p>
        <p>
          Theme: {props.colors.theme}
          <ColorSwatch color={props.colors.theme} />
        </p>
        <p>
          Dark: {props.colors.shadow1}
          <ColorSwatch color={props.colors.shadow1} />
        </p>
        <p>
          Darker: {props.colors.shadow2}
          <ColorSwatch color={props.colors.shadow2} />
        </p>
        <p>
          Faded: {props.colors.faded}
          <ColorSwatch color={props.colors.faded} />
        </p>
        <div className="submit-area">
          <input required type="text" placeholder="Name your preset"></input>
          <button type="submit">Save Preset</button>
        </div>
        <LoadAndDelete themes={props.themes} />
      </StyledForm>
    </FullContainer>
  );
};

export default Controller;
