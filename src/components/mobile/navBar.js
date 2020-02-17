import React from "react";
import Logo from "../utils/logo";
import Icon from "../utils/icon";
import toggle from "../../icons/list.svg"
import Button from "../utils/button";
import texts from "../../constants/texts";
import signUpHandler from "../../eventHandlers/signUpModal";
import menuToggle from "../../eventHandlers/menuToggle";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      servicesShown: false
    };
  }

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
            <a className="nav-item" href={texts.menuLinks[0]}>
              {texts.menuItems[0]}
            </a>
            <a className="nav-item" href={texts.menuLinks[1]}>
              {texts.menuItems[1]}
            </a>
            <a className="nav-item" href={texts.menuLinks[2]}>
              {texts.menuItems[2]}
            </a>
            <a className="nav-item" href={texts.menuLinks[3]}>
              {texts.menuItems[3]}
            </a>
          <a className="nav-item" href={texts.menuLinks[4]}>
              {texts.menuItems[4]}
            </a>
            <a className="nav-item active" href="#" onClick={e => this.menuHandler(e)}>
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
