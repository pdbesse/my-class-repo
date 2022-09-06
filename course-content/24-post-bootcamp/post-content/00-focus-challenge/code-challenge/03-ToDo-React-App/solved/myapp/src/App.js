import React from "react";
import Todo from "./components/Todo";
// import Background from "./components/Background";
import bg from "./images/bg1.jpg"

function App() {
  const Style = {
    row: {
      backgroundImage: 'url(' + bg + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      height: "1000px"
    }
  }

  return (
    <div className="row" style={Style.row}>
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <Todo />
      </div>
      <div className="col-md-2"></div>
    </div>
  )
}

export default App;
