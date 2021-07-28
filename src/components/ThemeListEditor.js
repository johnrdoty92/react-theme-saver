import { FlexColumn, FlexRow } from "./StyledComponents";

const ThemeListEditor = (props) => {
  const themes = props.themeNames.map((theme) => {
    return <option value="theme">{theme}</option>;
  });

  return (
    <div>
      <div className="submit-area">
        <input required type="text" placeholder="Name your preset"></input>
        <button type="submit">Save Preset</button>
      </div>
      <div>
        <select>{themes}</select>
        <button type="button" onClick={props.onClickLoad}>
          Load
        </button>
      </div>
    </div>
  );
};

export default ThemeListEditor;
