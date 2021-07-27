import { FlexColumn, FlexRow } from "./StyledComponents";

const ThemeListEditor = (props) => {
  return (
    <div>
      <div className="submit-area">
        <input required type="text" placeholder="Name your preset"></input>
        <button type="submit">Save Preset</button>
      </div>
      <div>
        <select></select>
        <button type="button" onClick={props.onClickLoad}>
          Load
        </button>
      </div>
    </div>
  );
};

export default ThemeListEditor;
