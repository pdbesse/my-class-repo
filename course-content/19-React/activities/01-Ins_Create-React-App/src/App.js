import React from 'react';
// First we import our Hello component from our components folder.
import Hello from './components/Hello';

// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.
function App() {
  return <Hello />;
}

//Because it is possible to export more than one component from a file, we use the default keyword to tell React that this component should be imported if none is specified.
export default App;
