import React from "react";
import Logo from "../utils/logo";
import Icon from "../utils/icon";
import toggle from "../../icons/list.svg"
import Button from "../utils/button";
import texts from "../../constants/texts";
import signUpHandler from "../../eventHandlers/signUpModal";
import menuToggle from "../../eventHandlers/menuToggle";


const MobileNavBar = () => {
  return (
      <div className="nav-bar">
        <Logo className="logo" height={2.5}/>
        <Button value={texts.signUp} onClick={e => signUpHandler(e)}/>
        <Icon src={toggle} className="toggle" height={2.25} width={5} onClick={e => menuToggle(e)}/>
      </div>
  );
};

export default MobileNavBar;
