import React from 'react';

// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.
// The `Hello` component is a child of our `App` component and is responsible for rendering the "Hello World" header.
function Hello() {
  const message = 'Hello world! I am a React Component';
  // The return statement contains something called "JSX"
  // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
  // Expressions in JSX should be placed in curly braces {}
  return (
    <div className="container">
      <h2>{message}</h2>
    </div>
  );

  // return <h2>{message}</h2>

  // return (
  //   <div className="container">
  //     <h2>{message}</h2>
  //     <h2>{message}</h2>
  //     <h2>{message}</h2>
  //   </div>

  // )

}


export default Hello;
//https://www.freecodecamp.org/news/node-js-module-exports-vs-exports-ec7e254d63ac/

// Capitalized — component names with first letter uppercase are treated as a React component (e.g. <Foo />);

// Lowercase — component names starting with lowercase letters are treated as DOM elements (e.g. <div>, <span>, etc.).