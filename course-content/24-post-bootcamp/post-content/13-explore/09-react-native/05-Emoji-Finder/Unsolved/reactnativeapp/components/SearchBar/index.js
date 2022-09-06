import React, { Component } from "react";
import API from "../../utils/API";

class SearchBar extends Component {
  state = {
    // State variables.. you can use useState too if you want
  }

  componentDidMount = () => {
    this.getAllEmojis();
  }

  getAllEmojis = () => {
    // call the function inside API.js that makes the axios call
    // and set the state
  }

  render() {
    return (
      <>
        {/* Write your logic here! */}
        {/* You might have to render searchBar and a list to
        display all emojis */}
      </>
    )
  }
}

export default SearchBar;