import React from "react";

function ListItem(props) {
  return <li className="list-group-item bg-light text-secondary">{props.item}</li>;
}

export default ListItem;