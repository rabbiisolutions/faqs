import React from "react";
import logo from "../../icons/logo.svg";
import Icon from './icon'

const Logo = (props) => {
  return (
      <Icon src={logo} className={props.className} height={props.height}/>
  );
};

// Exporting the component
export default Logo;
