import React from 'react';

// Our Alert function accepts on argument of `props`.
// This will be an object containing all of the props or properties that were passed to this component from the parent.
// We can expect to see "message" and "type" properties inside our "props" object.

// Props are a way to pass down data as objects to nested components as arguments. These are known as child components.
// We can pass any type of data as a prop, including strings, numbers, arrays, functions, and even entire components!

// React uses a unidirectional data flow, meaning that data only flows in one direction: from the top down, parent to child.

// ☝️ If a prop inside the component isn't what we expect it to be, where could we look to find out why?
// 🙋 We would look at the parent component to see what kind of data is being passed.

function Alert(props) {
  console.log(props);

  return (
    <div className={`alert alert-${props.type || 'success'}`} role="alert">
      {props.message}
    </div>
  );
}





export default Alert;
