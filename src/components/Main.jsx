import React from "react";
import MobileView from "./Mobile";
import AnswerView from "./AnswerView";
import DesktopView from "./Desktop";
import { BrowserRouter as Router } from 'react-router-dom';
import q1 from "../constants/answers";
import toggles from "../utils/toggles";
import SearchBox from "./SearchBox";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerShown: false,
      text: props.text,
      list: props.list,
      title: props.title,
      category: props.category,
      itemName: props.itemName
    }
  }

  showAnswer = (evt, key, result) => {
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
    if (evt) {
      let target = evt.target; // clicked element
      if (result) {
        // click came from live result item, navigate to target text (h3)
        let tagName = target.tagName;
        console.log(tagName);
        if (tagName === 'H5') {
          target = target.nextElementSibling; // click from [h5]
        }
        else if (tagName === 'P') {
          target = target.previousElementSibling; // click from [p]
        }
        else if (tagName === 'DIV') {
          target = target.childNodes[1]; // click from [parent result item div]
        }
      }
      this.updateBreadcrumb(target);
    }
  };

  toggleItems = (status) => {
    toggles.toggleHiddenByClassWithStatus([
      {name: 'search-box', hasHiddenClass: status}, {name: 'accordion', hasHiddenClass: status},
      {name: 'desktop', hasHiddenClass: status}
    ]);
  };

  updateBreadcrumb = (target) => {
    const parentNode = target.parentNode;
    const parentClass = parentNode.classList[0];
    const nodeText = target.textContent;
    let categoryText = '';
    if (parentClass === 'collapse-content') {
      // collapsed view (mobile)
      categoryText = parentNode.previousElementSibling.childNodes[2].textContent;
    } else if (parentClass === 'category-view' || parentClass === 'live-result') {
      // categories listing (desktop) or  live result item
      categoryText = parentNode.childNodes[0].textContent;
    }
    this.setState({
      category: categoryText,
      itemName: nodeText
    });
  };

  render() {
    return(
        <Router>
          <SearchBox showAnswer={this.showAnswer}/>
          <MobileView showAnswer={this.showAnswer}/>
          <AnswerView showAnswer={this.showAnswer} answerShown={this.state.answerShown}
                      title={this.state.title} text={this.state.text} list={this.state.list}
                      category={this.state.category} itemName={this.state.itemName}
          />
          <DesktopView showAnswer={this.showAnswer}/>
        </Router>
    )
  }
}

export default Main;
