import React from "react";
import ReactSVG from "react-svg";

function Icon(props) {
  return (
      <ReactSVG src={props.src} className={props.className} beforeInjection={svg => {
        svg.setAttribute('style', 'height: ' + props.height  + 'em; width: ' + props.width + 'em;');
      }} wrapper="span" onClick={props.onClick}>
      </ReactSVG>
  );
}

export default Icon;
