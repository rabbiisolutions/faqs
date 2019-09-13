import React from "react";
import texts from "../../constants/texts";
import menuToggle from "../../eventHandlers/menuToggle";


class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      servicesOpen: false
    };
  }

  servicesToggle(e) {
    if (!this.state.servicesOpen) {
      document.getElementsByClassName('services')[0].classList.toggle('hidden');
    }
  };

  menuHandler(e) {
    const target = e.target;
    if (this.state.active)
      this.toggleActive(this.state.active);
    this.toggleActive(target);
    this.setState({active: target});
    if (target.classList[0] === 'menu-sub-item')
      this.setState( {servicesOpen: !this.state.servicesOpen});
    else {
      this.setState( {servicesOpen: false});
      this.servicesToggle(e);
    }
    menuToggle(target);
  }

  toggleActive(item) {
    item.classList.toggle('active');
  }

  render() {
    return (
        <div className="menu hidden">
          <div className="side-bar">
            <div className="menu-title">{texts.menuTitle}</div>
            <hr className="menu-divider" />
            <div className="menu-items">
              <a className="menu-item"  href="http://www.rabbii.co.ke/">
                {texts.menuItems[0]}
              </a>
              <div className="menu-item" onClick={e => this.servicesToggle(e)}>
                {texts.menuItems[1]}
              </div>
              <div className="services hidden">
                <a className="menu-sub-item" href="http://www.rabbii.co.ke/#teecha">
                  {texts.ourServices[0]}
                </a>
              </div>
              <a className="menu-item" href="http://about.rabbii.co.ke/">
                {texts.menuItems[2]}
              </a>
              <a className="menu-item" href="#" onClick={e => this.menuHandler(e)}>
                {texts.menuItems[3]}
              </a>
              <a className="menu-item" href="#contacts" onClick={e => this.menuHandler(e)}>
                {texts.menuItems[4]}
              </a>
              <a className="menu-item" href="http://www.rabbii.co.ke/#trending">
                {texts.menuItems[5]}
              </a>
            </div>
          </div>
        </div>
    );
  }
}

export default SideBar;
