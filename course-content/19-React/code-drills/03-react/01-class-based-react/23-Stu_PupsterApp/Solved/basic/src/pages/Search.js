import React, { Component } from "react";
import API from "../utils/API";
import "../styles/SearchForm/style.css";
import "../styles/SearchResults/style.css";

class Search extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
    error: "",
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getBaseBreedsList()
      .then((res) => this.setState({ breeds: res.data.message }))
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getDogsOfBreed(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <div className={`container`} style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Breed!</h1>
          <div
            role="alert"
            className={`alert alert-danger fade in`}
            style={{
              width: "80%",
              margin: "0 auto",
              marginTop: 18,
              opacity: this.state.error ? 1 : 0,
              marginBottom: 10,
            }}
          >
            {this.state.error}
          </div>
          <form className="search">
            <div className="form-group">
              <label htmlFor="breed">Breed Name:</label>
              <input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="breed"
                list="breeds"
                type="text"
                className="form-control"
                placeholder="Type in a dog breed to begin"
                id="breed"
              />
              <datalist id="breeds">
                {this.state.breeds.map((breed) => (
                  <option value={breed} key={breed} />
                ))}
              </datalist>
              <button
                type="submit"
                onClick={this.handleFormSubmit}
                className="btn btn-success"
              >
                Search
              </button>
            </div>
          </form>
          <ul className="list-group search-results">
            {this.state.results.map((result) => (
              <li key={result} className="list-group-item">
                <img alt="Dog" src={result} className="img-fluid" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
