import React from "react";

const ColorScheme = (props) => {
  return (
    <React.Fragment>
      <h4>1. Choose a color scheme:</h4>
      <div className="radio-button">
        <input
          onChange={props.onChange}
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
          onChange={props.onChange}
          id="Complementary"
          type="radio"
          value="Complementary"
          name="type"
        />
        <label htmlFor="Complementary">Complementary</label>
      </div>
    </React.Fragment>
  );
};

export default ColorScheme;
