import React from "react";
import { StyledDropDown } from "./StyledComponents";

const DropdownList = (props) => {
  if (localStorage) {
    const options = Object.keys(localStorage).map((key) => {
      return (
        <option value={key} key={key}>
          {key}
        </option>
      );
    });
    return (
      <StyledDropDown>
        <select>{options}</select>
        <button type="button" onClick={props.onLoad}>
          Load Theme
        </button>
        <button type="button" onClick={null}>
          Delete Theme
        </button>
      </StyledDropDown>
    );
  } else {
    return (
      <p>
        Sorry, your broswer does not support localStorage, so we can't save
        themes here.
      </p>
    );
  }
};
export default DropdownList;
