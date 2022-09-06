import React from "react";

export function DisplayList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function DisplayListItem(props) {
  return (
    <div>
      <li className="list-group-item" onClick={props.handleShow}>
        {props.image}{" "}{props.name}</li>
    </div>
  )
}
