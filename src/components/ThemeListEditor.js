import { FlexRow } from "./StyledComponents";

const ThemeListEditor = (props) => {
  const themes = props.themeNames.map((theme) => {
    return (
      <option key={theme} value={theme}>
        {theme}
      </option>
    );
  });

  return (
    <div className="save-load-delete">
      <h4>4. Save themes:</h4>
      <div className="submit-area">
        <input required type="text" placeholder="Name your preset"></input>
        <button type="submit">Save Preset</button>
      </div>
      <h4>5. Load or delete themes:</h4>
      <FlexRow>
        <select>{themes}</select>
        <button type="button" onClick={props.onClick}>
          Load
        </button>
        <button type="button" onClick={props.onClick}>
          Delete
        </button>
      </FlexRow>
    </div>
  );
};

export default ThemeListEditor;
