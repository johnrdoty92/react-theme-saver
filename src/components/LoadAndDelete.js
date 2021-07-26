import { FlexColumn, FlexRow } from "./StyledComponents";

const LoadAndDelete = (props) => {
  const themes = props.themes.map((theme) => {
    return (
      <option key={theme} value={theme}>
        {theme}
      </option>
    );
  });
  return (
    <FlexRow>
      <select>{themes}</select>
      <FlexColumn>
        <button type="button">Load Theme</button>
        <button type="button">Delete Theme</button>
      </FlexColumn>
    </FlexRow>
  );
};

export default LoadAndDelete;
