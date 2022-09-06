// 🔑 We can also see that we included a __tests__ directory inside the component's directory. This naming convention is intentional, along with the file names, so that Jest can easily recognize which test files it should run.

// If we wanted to write a test for a file called index.js, we would create a __tests__ directory inside /components and name it using the following convention:

// index.test.js

import React from 'react';
// Here are our required imports for testing
//ReactDOM.render
//https://reactjs.org/docs/react-dom.html#render
//unmountComponentAtNode
//https://reactjs.org/docs/react-dom.html#unmountcomponentatnode

//  These help us with some very specific tasks, such as rendering components and performing the 
//Arrange-Act-Assert pattern, as well as cleaning up after we run the tests.

import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

//import the actual component that we want to test. In this case, that is the Welcome component:
import Welcome from '../Welcome';




// We declare an empty container that will be the target for all our components during testing
let container = null;

// We want to render our React tree to a DOM element that is attached so that we can watch events
//https://reactjs.org/docs/testing-recipes.html#setup--teardown

//For each test, we usually want to render our React tree to a DOM element that’s attached to document. This is important so that it can receive DOM events. When the test ends, we want to “clean up” and unmount the tree from the document.
//A common way to do it is to use a pair of beforeEach and afterEach blocks so that they’ll always run and isolate the effects of a test to itself:


beforeEach(() => {
  // Setup a DOM element as the target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // Cleanup on exiting to prevent this test from altering the results of future tests
  // Cleans up the DOM elements added to memory after the tests conclude, to avoid unnecessarily occupying memory if the test isn't running.
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// It blocks describe the area of the application that we are testing
it('renders with or without a name or topic', () => {
  // Act relates the act, arrange, assert pattern in testing
  // This first test renders a Welcome component with no props

  // The React documentation recommends wrapping any code that renders or triggers updates to the components into act() calls.
  // Inside the act() method, we use the render() method. This will take a component to render as the first argument, and the target element as a second argument:
  act(() => {
    render(<Welcome />, container);
  });
  // check that the inner content of the component matches what we expect.
  // The logic of the Welcome component states that if no name attribute is provided, 
  // it should instead default to a specific message ("Hey there!"): 
  expect(container.textContent).toBe('Hey there!');

  // Here we are testing a Welcome component with a name and topic prop passed
  act(() => {
    render(<Welcome name="Xander" topic="React" />, container);
  });

  expect(container.textContent).toBe(
    'Welcome, Xander! We hope you learn a lot about React.'
  );

  // Redundant test for a name and topic
  act(() => {
    render(<Welcome name="Tammer" topic="Mocks" />, container);
  });
  expect(container.textContent).toBe(
    'Welcome, Tammer! We hope you learn a lot about Mocks.'
  );

  // Tests the Welcome component where only a name prop is passed.
  // This will ensure that our fallback value was used
  act(() => {
    render(<Welcome name="Grace" />, container);
  });
  expect(container.textContent).toBe(
    'Welcome, Grace! We hope you learn a lot about Web Development.'
  );
});
