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
    let status;
    if (key) {// action came from answer link
      this.toggleItems(false);
      status = true;
    }
     else {
      // action came from back to home button
      this.toggleItems(true);
      status = false;
    }
    this.setState({
      answerShown: status,
      text: q1.text,
      list: q1.list,
      title: q1.title,
    });
     // hide the element
    toggles.toggleHiddenByClassWithStatus([{name: 'answer-view', hasHiddenClass: status}]);
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
        this.hideResults(); // hide live results on result item click to show answer view
      }
      this.updateBreadcrumb(target);
    }
  };

  toggleItems = (status) => {
    toggles.toggleHiddenByClassWithStatus([
      {name: 'accordion', hasHiddenClass: status},
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

  hideResults = () => {
    // hide the live search div and the result mask
    toggles.toggleHiddenByClassWithStatus(
        [{name: 'live-search', hasHiddenClass: false},
          {name: 'result-mask', hasHiddenClass: false}]
    );
  };

  render() {
    return(
        <Router>
          <SearchBox showAnswer={this.showAnswer} hideResults={this.hideResults}/>
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
