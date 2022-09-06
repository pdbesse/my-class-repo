import React from "react";

function List(props) {
  return <ul className="list-group">{props.children}</ul>
}

export default List;