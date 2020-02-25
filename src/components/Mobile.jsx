import React from "react";
import texts from "../constants/texts";
import sectionCollapseHandler from "../events/collapse";
import active from "../assets/icons/inactive.svg";
import inactive from "../assets/icons/active.svg";
import Icon from "./basic/Icon";
import faqsList from "../constants/faqs";
import { BrowserRouter as Router } from 'react-router-dom';

class MobileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswer: props.showAnswer
    }
  }

  Content = (links) => {
    return (
        <div className="collapse-content">
          {links.map((link) => (<p className={'faq-link'} key={link.key} onClick={e => this.props.showAnswer(e, 'key')}>{link.value}</p>))}
        </div>
    )
  };

  Toggle = (title) => {
    return (
        <div className="collapse-toggle" onClick={e => sectionCollapseHandler(e)}>
          <Icon src={inactive} height={1.2} width={1.2} className="inactive"/>
          <Icon src={active} height={1.2} width={1.2} className="active hidden"/>
          <span className="collapse-title">{title}</span>
        </div>);
  };

  FaqView = (collapse) => {
    return(
        <Router key={collapse.key}>
          {this.Toggle(collapse.category)}
          {this.Content(collapse.list)}
        </Router>
    )
  };

  render() {
    return(
        <section className={'accordion'}>
          <div className={'client-view'}>
            <h3>{texts.faqsC}</h3>
            {faqsList.map((collapse) => (this.FaqView(collapse)))}
          </div>
          <div className={'tutor-view hidden'}>
            <h3>{texts.faqsT}</h3>
            {faqsList.map((collapse) => (this.FaqView(collapse)))}
          </div>
        </section>
    )
  }
}

export default MobileView;
