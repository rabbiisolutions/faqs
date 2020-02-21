import React from "react";
import Icon from "./basic/Icon";
import search from "../assets/icons/search.svg";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null
    }
  }

  onType = (evt) => {

  };

  Input = () => {
    return(
        <div id={'search-group'}>
          <Icon src={search} height={3} width={3} units={'vh'} className={'search-icon'}/>
          <input type={'search'} name={'search'} id={'search'} onChange={e => this.onType()} placeholder={'Type keywords to find answers'}/>
        </div>
    )
  };

  render() {
    return(
      <section id={'search-box'}>
        <div id={'search-title'}>Hello, how can we help you?</div>
        {this.Input()}
        <div id={'search-lead'}>You can also browse the topics below to find what you are looking for.</div>
      </section>
    );
  }

}

export default SearchBox;
