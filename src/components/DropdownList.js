import React from "react";

const DropdownList = () => {
  if (localStorage) {
    const options = Object.keys(localStorage).map((key) => {
      return <option key={key}>{key}</option>;
    });
    return (
      <React.Fragment>
        <select>{options}</select>
        <button>Load Theme</button>
        <button>Delete Theme</button>
      </React.Fragment>
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
