import React from "react";
import texts from "../constants/texts";
import faqsList from "../constants/faqs";

class DesktopView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswer: props.showAnswer
    }
  }

  CategoryView = (collapse) => {
    return(
        <div key={collapse.key} className={'category-view'}>
          <h3>{collapse.category}</h3>
            {collapse.list.map((link) => (<p className={'faq-link'} key={link.key} onClick={e => this.props.showAnswer('key')}>{link.value}</p>))}
        </div>
    )
  };
  render() {
    return(
        <section id={'desktop-view'} className={'desktop'}>
          <div className={'client-view'}>
            <h3>{texts.faqsC}</h3>
            <div className={'categories'}>
              {faqsList.map((collapse) => (this.CategoryView(collapse)))}
            </div>
          </div>
          <div className={'tutor-view hidden'}>
            <h3>{texts.faqsT}</h3>
            <div className={'categories'}>
              {faqsList.map((collapse) => (this.CategoryView(collapse)))}
            </div>
          </div>
        </section>
    )
  }
}

export default DesktopView;
