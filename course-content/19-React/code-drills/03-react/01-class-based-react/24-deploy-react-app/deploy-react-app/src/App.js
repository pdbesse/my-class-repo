import React from 'react';
import Main from "./pages/main";
import Jumbotron from "./components/jumbotron"

function App() {
  return (
    <div className="container">
      <Jumbotron />
      <Main />
    </div>
  );
}

export default App;
