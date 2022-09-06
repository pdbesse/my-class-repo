import React, { useState } from "react";
import "./App.css";

function App() {
  const [developerState, setDeveloperState] = useState({
    excitementLevel: 10000,
    lifeLongLearner: true,
    mood: "excited",
    name: "Farley"
  });


  // const [name, setNameState] = useState("Farley");
  // const [lifeLongLearner, setlifeLongLearnerState] = useState(true);
  // const [mood, setMoodState] = useState("Excited");
  // const [excitementLevel, setexcitementLevelState] = useState(10000);

  return (
    <div className="card">
      <div>
        Name: {developerState.name}
      </div>
      <div>
        Status: {developerState.mood}
      </div>
      <div>
        Lifelong learner: {developerState.lifeLongLearner.toString()}
      </div>
      <div>
        Excitement Level: {developerState.excitementLevel}
      </div>
      <div className="btn-group">
        <button onClick={() => setDeveloperState({ ...developerState, mood: "lazy" })} className="btn btn-danger">
          Encourage Laziness
        </button>
      
        <button onClick={() => setDeveloperState({ ...developerState, mood: "determined" })} className="btn btn-success">
          Fill with Determination
        </button>
      </div>
    </div>
  );
}

export default App;
