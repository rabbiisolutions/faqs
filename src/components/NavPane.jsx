import React from "react";

class NavPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null
    }
  }

  changeContent = (user) => {
    // handle pane change
  };

  PaneItem = (props) => {
    return (
        <div className={'pane-item ' + props.active} onClick={e => this.changeContent(props.user)}>
          <span className={'text'}>{props.text}</span>
          <span className={'active ' + props.hidden}/>
        </div>
    )
  };

  render() {
    return (
     <nav id={'nav-pane'}>
       {this.PaneItem({hidden: '', text: 'Client', user: 'client', active: 'active'})}
       {this.PaneItem({hidden: 'hide', text: 'Tutor', user: 'tutor', active: ''})}
     </nav>
    )
  }
}

export default NavPane;
