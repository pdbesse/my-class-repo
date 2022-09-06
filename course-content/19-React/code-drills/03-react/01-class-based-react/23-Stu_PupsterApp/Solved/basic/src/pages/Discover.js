import React, { Component } from "react";
import API from "../utils/API";
import "../styles/Card/style.css";
import "../styles/CardBtn/style.css";



class Discover extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0,
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextDog();
  }

  handleBtnClick = (event) => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (btnType === "pick") {
      // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;

      // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      // If we thumbs down'ed the dog, we haven't matched with it
      newState.match = false;
    }
    // Replace our component's state with newState, load the next dog image
    this.setState(newState);
    this.loadNextDog();
  };

  loadNextDog = () => {
    API.getRandomDog()
      .then((res) =>
        this.setState({
          image: res.data.message,
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Make New Friends</h1>
        <h3 className="text-center">
          Thumbs up on any pups you'd like to meet!
        </h3>
        <div
          className="card"
          style={{
            backgroundImage: this.state.image
              ? `url(${this.state.image})`
              : "none",
          }}
        >
          {!this.state.image && (
            <i className="fa fa-spinner fa-spin" aria-hidden="true" />
          )}
          <button
            style={{ opacity: this.state.image ? 1 : 0 }}
            onClick={this.handleBtnClick}
            className={`card-btn pass`}
            data-value="pass"
          />
          <button
            style={{ opacity: this.state.image ? 1 : 0 }}
            onClick={this.handleBtnClick}
            className={`card-btn pick`}
            data-value="pick"
          />
        </div>
        <h1 className="text-center">
          Made friends with {this.state.matchCount} pups so far!
        </h1>
        <div
          role="alert"
          className={`alert alert-success fade in`}
          style={{
            width: "80%",
            margin: "0 auto",
            marginTop: 18,
            opacity: this.state.match ? 1 : 0,
          }}
        >
          Yay! That Pup Liked You Too!!!
        </div>
      </div>
    );
  }
}

export default Discover;
