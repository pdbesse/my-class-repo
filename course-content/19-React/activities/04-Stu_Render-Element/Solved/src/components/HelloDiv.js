import React from "react";

// ☝️ How can we avoid getting errors when rendering JSX elements from a component?
// 🙋 We can wrap them in a single parent element or return an array of JSX elements with a key attribute.
// function HelloDiv() {
//   return (
//     // this is just a function returning a string
//     "Hello"
//   )
// }

// function HelloDiv() {
//   return (
//     //this is a react componant that is returning JSX
//     //https://reactjs.org/docs/introducing-jsx.html#jsx-represents-objects
//     <p>"Hello"</p>
//   )
// }


//fragments
//https://reactjs.org/docs/fragments.html
// function HelloDiv() {
//   return (
//     <>Hello</>
//   )
// }

function HelloDiv() {
  return (
    <div>
      <h1>Hey guys! I'm a header!</h1>
      <h2>Things I like!</h2>
      <ul>
        <li>Peas</li>
        <li>Carrots</li>
        <li>Love</li>
      </ul>
    </div>
  );
}

export default HelloDiv;
// export {HelloDiv};
