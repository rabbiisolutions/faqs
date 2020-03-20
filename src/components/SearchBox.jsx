import React from "react";
import Icon from "./basic/Icon";
import search from "../assets/icons/search.svg";
import faqsList from "../constants/faqs";
import toggles from "../utils/toggles";
import LiveSearch from "./LiveSearch";

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      results: [],
      showAnswer: props.showAnswer,
      quizKeys: [],
      hideResults: props.hideResults
    }
  }

  onType = (evt) => {
    // to make sure the any body click hide doesn't get appended, clear results
    if (document.getElementsByClassName('live-search')[0].classList[1] === 'hidden') {
      this.clearResults();
    }
    let textInput = evt.target.value.toLowerCase(); // get value from search box
    // only search if value is > 2 chars
    if (textInput.length > 2) {
      // iterate thru the FAQs list
      let count = 0;
      let matchedList = [];
      let quizKeys  = [];

      Object.values(faqsList).forEach((user)=> (
          user.forEach(faq => {
        faq.list.forEach((item) => {
          let status = false; // stores whether the text was matched or not

          try { // for now; those dummy question without answers
            let title = item.answer.title.toLowerCase();
            if (title.includes(textInput)) {
              status = true; // matched
            }
            // iterate thru the paragraphs
            item.answer.text.forEach((p) => {
              if (p.value.toLowerCase().includes(textInput)) {
                status = true; // matched
              }
            });
            // iterate thru the list items
            // append item search result to live search if matched
            if (status) {
              count = count + 1;
              let text = item.answer.text[0].value;
              let quizKey = item.answer.key;
              let category = getKeyByValue(faqsList,user);
              let lastIndex;
              if (category === 'tutorFaqs') {
                lastIndex = 5;
              }
              else if (category === 'clientFaqs') {
                lastIndex = 6;
              }
              let currentUser = category.charAt(0).toUpperCase() + category.slice(1, lastIndex);
              //console.log(category.charAt(0).toUpperCase() + category.slice(1, lastIndex));
              // clip the text length if greater than 120 characters
              text = text.length > 120 ? text.substring(0, 120) : text;
              let matched = {category: currentUser + ' -> '+ faq.category, title: title, text: text + '...', key: 'r' + count, quizKey: quizKey};
                if (!Boolean(matchedList.length)
                    || (matchedList[0] !== undefined
                        && matchedList[0].title !== 'No results')) {
                  // concatenate if only the no result isn't shown
                  // and the item doesn't exist in matched list already
                  if (!quizKeys.includes(quizKey)) {
                    matchedList.push(matched);
                    quizKeys.push(quizKey);
                  }
                } else  {
                  // otherwise, reset the list and add the matched answer
                  matchedList = [matched,];
                  quizKeys = [quizKey,];
                }
            }

          } catch (e) {
            // nothing to do
          }
        })}
      )));
      if (count === 0) { // no match found
        this.setState({
          results: [{title: 'No results', text: 'Please check your spelling and try again', key: 'r' + count}]
        })
      } else {
        //console.log(quizKeys);
        this.setState({results: matchedList, quizKeys: quizKeys});
      }
      // show the live search div and the result mask
      toggles.toggleHiddenByClassWithStatus(
          [{name: 'live-search', hasHiddenClass: true},
            {name: 'result-mask', hasHiddenClass: true}]
      );
    } else {
      // hide the live search div and the result mask
      this.state.hideResults();
      // reset the results div
      this.clearResults();
    }
  };

  clearResults = () => {
    this.setState({results: [], quizKeys: []});
  };

  Input = () => {
    return(
        <div id={'search-group'}>
          <Icon src={search} height={3} width={3} units={'vh'} className={'search-icon'}/>
          <input type={'search'} name={'search'} id={'search'} onChange={e => this.onType(e)} placeholder={'Type keywords to find answers'}/>
        </div>
    )
  };

  render() {
    return(
      <section id={'search-box'} className={'search-box'}>
        <div id={'search-title'}>Hello, how can we help you?</div>
        {this.Input()}
        <LiveSearch results={this.state.results} showAnswer={this.state.showAnswer}/>
        <div className="result-mask hidden" onClick={e => this.state.hideResults(e)}/>
        <div id={'search-lead'}>You can also browse the topics below to find what you are looking for.</div>
      </section>
    );
  }

}

export default SearchBox;
