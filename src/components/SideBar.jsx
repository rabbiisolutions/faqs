import React from "react";
import texts from "../constants/texts";
import menuToggle from "../events/menu-toggle";


class SideBar extends React.Component {
  render() {
    return (
        <nav className="menu hidden">
          <div className="side-bar">
            <div className="menu-title">{texts.menuTitle}</div>
            <div className="menu-items">
              <a className="menu-item" href={texts.menuLinks[0]}>
                <span className={'activated hidden'}>&nbsp;</span>
                <span className={'text'}>{texts.menuItems[0]}</span>
              </a>
              <a className="menu-item" href={texts.menuLinks[1]}>
                <span className={'activated hidden'}>&nbsp;</span>
                <span className={'text'}>{texts.menuItems[1]}</span>
              </a>
              <a className="menu-item" href={texts.menuLinks[2]}>
                <span className={'activated hidden'}>&nbsp;</span>
                <span className={'text'}>{texts.menuItems[2]}</span>
              </a>
              <a className="menu-item" href={texts.menuLinks[3]}>
                <span className={'activated hidden'}>&nbsp;</span>
                <span className={'text'}>{texts.menuItems[3]}</span>
              </a>
              <a className="menu-item active" href={"#start"} onClick={e => menuToggle(e)}>
                <span className={'activated'}>&nbsp;</span>
                <span className={'text'}>{texts.menuItems[4]}</span>
              </a>
              <a className="menu-item" href={texts.menuLinks[4]}>
                <span className={'activated hidden'}>&nbsp;</span>
                <span className={'text'}>{texts.menuItems[5]}</span>
              </a>
            </div>
          </div>
        </nav>
    );
  }
}

export default SideBar;
