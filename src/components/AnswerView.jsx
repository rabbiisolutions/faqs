import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Button from "./basic/Button";
import Icon from "./basic/Icon";
import arrow from "../assets/icons/breadcrumb.svg"

class AnswerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      text: props.text,
      list: props.list,
      title: props.title,
      showAnswer: props.showAnswer
    }
  }

  AnswerContent = () => {
    if (this.state.active) {
      return (
          <Router>
            <h3>{this.props.title}</h3>
            {this.props.text.map(text => (<p key={text.key}>{text.value}</p>))}
            {this.props.list}
          </Router>
      )
    }
  };

  render() {
    return(
        <section className={'answer-view hidden'}>
          <div id={'breadcrumb'}>
            <span>Category</span>
            <Icon src={arrow} height={'auto'} width={'auto'} units={''} className={'arrow'}/>
            <span>Question Item</span>
          </div>
          {this.AnswerContent()}
          <div className={'home-div'}>
            <Button value={'FAQs Home'} className={'faqs-home'} onClick={e => this.props.showAnswer()}/>
          </div>
        </section>
    )
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // Any time props.title changes, update state.
    if (nextProps.title !== this.props.title) {
      this.setState({
        text: nextProps.text,
        list: nextProps.list,
        title: nextProps.title,
        active: true,
      });
    }
  }
}

export default AnswerView;
