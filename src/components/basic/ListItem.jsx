import React from "react";

const ListItem = (props) => {
  let listItems = props.map(props => (
          <li key={props.key}>{props.text}</li>
      )
  );

  return (<ul>{listItems}</ul>);
};

export default ListItem;
