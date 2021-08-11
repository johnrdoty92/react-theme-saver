import React from "react";

const ChooseColor = (props) => {
  return (
    <React.Fragment>
      <h4>2. Choose a color:</h4>
      <input type="color" onChange={props.onChange} />
    </React.Fragment>
  );
};

export default ChooseColor;
