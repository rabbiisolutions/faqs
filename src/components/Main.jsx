import React from "react";
import MobileView from "./Mobile";
import AnswerView from "./AnswerView";
import { BrowserRouter as Router } from 'react-router-dom';
import q1 from "../constants/answers";
import toggles from "../utils/toggles";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerShown: false,
      text: props.text,
      list: props.list,
      title: props.title,
    }
  }

  showAnswer = (key) => {
    toggles.toggleHiddenByClassWithStatus([{name: 'search-box', checkHidden: false}]);
    toggles.toggleHiddenByClass(['accordion']);
    this.setState({
      answerShown: !this.state.answerShown,
      text: q1.text,
      list: q1.list,
      title: q1.title,
    });
    toggles.toggleHiddenByClass(['answer-view']);
  };

  render() {
    return(
        <Router>
          <MobileView showAnswer={this.showAnswer}/>
          <AnswerView showAnswer={this.showAnswer} answerShown={this.state.answerShown} title={this.state.title} text={this.state.text} list={this.state.list}/>
        </Router>
    )
  }
}

export default Main;
