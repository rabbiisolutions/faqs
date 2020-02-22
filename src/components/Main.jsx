import React from "react";
import MobileView from "./Mobile";
import AnswerView from "./AnswerView";
import { BrowserRouter as Router } from 'react-router-dom';
import q1 from "../constants/answers";

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
    const searchBox = document.getElementsByClassName('search-box')[0];
    searchBox.classList.toggle('hidden');
    // the pane show which user is active
    //const navPane = document.getElementById('nav-pane');
    //navPane.classList.toggle('hidden');
    const accordion = document.getElementsByClassName('accordion')[0];
    accordion.classList.toggle('hidden');
    this.setState({
      answerShown: !this.state.answerShown,
      text: q1.text,
      list: q1.list,
      title: q1.title,
    });
    const answerView = document.getElementsByClassName('answer-view')[0];
    answerView.classList.toggle('hidden');
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
