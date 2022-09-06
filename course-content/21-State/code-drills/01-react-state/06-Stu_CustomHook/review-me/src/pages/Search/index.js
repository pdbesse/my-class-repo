import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";
import useDebounce from "../../utils/debounceHook";

function Search() {
  const [search, setSearch] = useState("Wikipedia");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  //The debouncedSearchTerm variable is set up outside of the useEffect Hook. 
  //We pass in the existing search variable that is tied to our component state and pass in 500 as our second parameter.
  const debouncedSearchTerm = useDebounce(search, 500);

  //useEffect receives debouncedSearchTerm so that it will only run when the debounced term changes instead of running whenever search changes.
  useEffect(() => {
    //First, we will check to make sure that the input text is not empty.
    if (!search) {
      return;
    }
    //Then we ensure that debouncedSearchTerm is not undefined or null.
    if (debouncedSearchTerm) {
      API.searchTerms(search)
        .then(res => {
          if (res.data.length === 0) {
            throw new Error("No results found.");
          }
          if (res.data.status === "error") {
            throw new Error(res.data.message);
          }
          setTitle(res.data[1][0]);
          setUrl(res.data[3][0]);
        })
        .catch(err => setError(err));
    }
  }, [debouncedSearchTerm]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search For Anything on Wikipedia</h1>
        <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
          {error}
        </Alert>
        <SearchForm
          handleInputChange={handleInputChange}
          results={search}
        />
        <SearchResults title={title} url={url} />
      </Container>
    </div>
  );
}

export default Search;
