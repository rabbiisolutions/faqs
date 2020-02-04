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
            <hr className="menu-divider"/>
            <div className="menu-items">
              <a className="menu-item"  href="https://www.rabbii.co.ke/">
                {texts.menuItems[0]}
              </a>
              <a className="menu-item" href="http://payment.rabbii.co.ke/">
                {texts.menuItems[1]}
              </a>
              <a className="menu-item" href="http://tuition-jobs.rabbii.co.ke/">
                {texts.menuItems[2]}
              </a>
              <a className="menu-item" href="http://about.rabbii.co.ke/">
                {texts.menuItems[3]}
              </a>
              <a className="menu-item" href="http://trending.rabbii.co.ke/">
                {texts.menuItems[4]}
              </a>
              <a className="menu-item active" href="#" onClick={e => this.menuHandler(e)}>
                {texts.menuItems[5]}
              </a>
            </div>
          </div>
        </div>
    );
  }
}

export default SideBar;
