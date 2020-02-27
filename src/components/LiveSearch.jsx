import React from "react";


class LiveSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: props.results,
      showAnswer: props.showAnswer
    }
  }

  noResult = () => {
    // do nothing on no result item click
  };

  SearchResult = (props) => {
    return (
        <div className={'live-result'} key={props.key}
             onClick={props.category ? e => this.props.showAnswer(e, 'key', true) :  e => this.noResult(e)}>
          <h5>{props.category}</h5>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </div>
    )
  };

  Results = () => {
    if (this.state.results) {
      return(
          this.state.results.map((resultItem) => (
              this.SearchResult(resultItem)
          ))
      )
    }
  };

  render() {
    return (
        <div className={'live-search hidden'}>
          {this.Results()}
        </div>
    )
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextContent) {
    this.setState({
      results: nextProps.results
    });
  }
}

export default LiveSearch;
