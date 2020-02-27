import React from "react";
import Icon from "./basic/Icon";
import arrow from "../assets/icons/breadcrumb.svg"

class BreadCrumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category,
      itemName: props.itemName
    }
  }
  render() {
    return (
        <div id={'breadcrumb'}>
          <span className={'category-name'}>{this.props.category}</span>
          <Icon src={arrow} height={'auto'} width={'auto'} units={''} className={'arrow'}/>
          <span className={'item-name'}>{this.props.itemName}</span>
        </div>
    )
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextContent) {
    // update breadcrumb
    this.setState({
      category: nextProps.category,
      itemName: nextProps.itemName
    });
  }
}

export default BreadCrumb;
