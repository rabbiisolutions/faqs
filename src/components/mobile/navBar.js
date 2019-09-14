import React from "react";
import Logo from "../utils/logo";
import Icon from "../utils/icon";
import toggle from "../../icons/list.svg"
import Button from "../utils/button";
import texts from "../../constants/texts";
import signUpHandler from "../../eventHandlers/signUpModal";
import menuToggle from "../../eventHandlers/menuToggle";
import overlayAction from "../../eventHandlers/overlayActions";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      servicesShown: false
    };
  }

  servicesToggle(e) {
    //.classList.toggle('hidden');
      overlayAction(document.getElementsByClassName('our-services')[0]);
  };

  menuHandler(e) {
    const target = e.target;
    const navItems = document.getElementsByClassName('nav-item');
    for (let i=0;i<navItems.length;i++) {
      navItems[i].classList.remove('active');
    }
    target.classList.toggle('active');
    this.setState({active: target});
  }

  render() {
    return (
      <div className="nav-bar">
        <Logo className="logo" height={2.5}/>
        <span className="nav">
            <a className="nav-item" href="http://www.rabbii.co.ke/">
              {texts.menuItems[0]}
            </a>
            <span className="nav-item" onClick={e => this.servicesToggle(e)}>
              {texts.menuItems[1]}
            </span>
            <a className="nav-item" href="http://about.rabbii.co.ke/">
              {texts.menuItems[2]}
            </a>
            <a className="nav-item active" href="#" onClick={e => this.menuHandler(e)}>
              {texts.menuItems[3]}
            </a>
            <a className="nav-item" href="#contacts" onClick={e => this.menuHandler(e)}>
              {texts.menuItems[4]}
            </a>
            <a className="nav-item" href="http://www.rabbii.co.ke/#trending">
              {texts.menuItems[5]}
            </a>
        </span>
        <Button value={texts.signUp} onClick={e => signUpHandler(e)}/>
        <Icon src={toggle} className="toggle" height={2.25} width={5} onClick={e => menuToggle(e)}/>
      </div>
    );
  }
}

export default NavBar;
