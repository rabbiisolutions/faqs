import React from "react";

const ButtonLink = (props) => {
  return (
      <a href={props.link} role="button" className={"btn-link " + props.className}>
        {props.icon}{props.value}
      </a>
  );
};

// Exporting the component
export default ButtonLink;
