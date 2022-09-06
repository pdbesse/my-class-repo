import React, { Component } from "react";
import List from "../components/list";
import ListItem from "../components/listItem";
import API from "../utils/API";

class Main extends Component {
  state = {
    todos: [],
  }

  componentDidMount() {
    API
      .getTodos()
      .then(({ data: todos }) => {
        this.setState({
          todos: todos
        })
      })
  }

  render() {
    return (
      <List>
        {this.state.todos.map(item => <ListItem item={item.note} />)}
      </List>
    )
  }
}

export default Main;