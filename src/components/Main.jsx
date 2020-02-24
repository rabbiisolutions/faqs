import React from "react";
import MobileView from "./Mobile";
import AnswerView from "./AnswerView";
import DesktopView from "./Desktop";
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
    // shows the answer view
    if (key) // action came from answer link
      this.toggleItems(false);
     else // action came from back to home button
      this.toggleItems(true);
    this.setState({
      answerShown: !this.state.answerShown,
      text: q1.text,
      list: q1.list,
      title: q1.title,
    });
    toggles.toggleHiddenByClass(['answer-view']);
  };

  toggleItems = (status) => {
    toggles.toggleHiddenByClassWithStatus([
      {name: 'search-box', hasHiddenClass: status}, {name: 'accordion', hasHiddenClass: status},
      {name: 'desktop', hasHiddenClass: status}
    ]);
  };

  render() {
    return(
        <Router>
          <MobileView showAnswer={this.showAnswer}/>
          <AnswerView showAnswer={this.showAnswer} answerShown={this.state.answerShown} title={this.state.title} text={this.state.text} list={this.state.list}/>
          <DesktopView showAnswer={this.showAnswer}/>
        </Router>
    )
  }
}

export default Main;
