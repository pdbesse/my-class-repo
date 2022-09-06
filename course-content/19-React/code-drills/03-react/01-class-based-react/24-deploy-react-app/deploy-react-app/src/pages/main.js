import React from "react";
import List from "../components/list";
import ListItem from "../components/listItem";



function Main() {
  const todoList = ["Create a React App", "Create a GitHub Repository", "Deploy to GH Pages"];

  return (
    <List>
      {todoList.map(item => <ListItem item={item} />)}
    </List>
  )
}

export default Main;