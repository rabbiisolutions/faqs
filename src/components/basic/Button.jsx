import React from "react";

const Button = (props) => {
  return (
      <button type="button" className={props.className} onClick={props.onClick}>
        {props.value}
      </button>
  );
};

// Exporting the component
export default Button;
