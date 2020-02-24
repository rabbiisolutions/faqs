import React from "react";
import toggles from "../utils/toggles";

class NavPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null
    }
  }

  changeContent = (evt) => {
    // this function changes the users view depending on the pane selected
    let selected = evt.target;
    const elemClass = selected.classList[0];
    if (elemClass !== "pane-item") {
      // the click is from child element
      if (elemClass === "text" || elemClass === "active") {
        selected = selected.parentNode; // set element to parent of text or active
      }
    }
    // we need to know the previous active element
    let prior = selected.nextElementSibling; // it can be the next
    if (prior === null) prior = selected.previousElementSibling; // or previous sibling
    // deactivate the previously active pill, activate the selected pill
    this.changeActivePill([prior, selected]);
    // handle pane change, show relative view
    toggles.toggleAllHiddenByClass(['client-view', 'tutor-view']);
    // hide answer view, show accordion or desktop and search box
    toggles.toggleHiddenByClassWithStatus([
      {name: 'answer-view', hasHiddenClass: false}, {name: 'accordion', hasHiddenClass: true},
      {name: 'desktop', hasHiddenClass: true}, {name: 'search-box', hasHiddenClass: true}
    ]);
  };

  changeActivePill = (targets) => {
    // toggle active and hide classes on a pane item
    targets.forEach((target) => {
      target.classList.toggle('active');
      target.childNodes[1].classList.toggle('hide');
    });
  };

  PaneItem = (props) => {
    return (
        <div className={'pane-item ' + props.active} onClick={e => this.changeContent(e)}>
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
