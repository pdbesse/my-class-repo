# Student Resources :computer:

<hr>

[Return to React](../README.md)

## Overview

In this unit, you will learn how to create a single-page application (SPA) using React. React is a powerful and elegant technology, as well as a very in-demand skill to have as a web developer. As you create your SPA, you will learn how to use React components, manage application state, and pass data throughout your app. You'll get a sense for how React works under the hood and the problems it solves in modern web development. By the end of this unit, you will be one step closer to being employer-ready.


<hr>

<img src="../../00-admin-resources/assets/images/react.jpg" height="60">

### Table of Contents

### Terminology & Links

01. [ES6](#ES6)
02. [React](#REACT)

<!-- ### Audio Resources
01. [Podcasts](./podcasts.md) -->

<!-- ### Video Resources
01. [Video Listing](/video.md) -->

<hr>

## Key Topics

The following topics will be covered in this unit:

* [Create React App](https://create-react-app.dev/docs/getting-started)

* [Rendering elements](https://reactjs.org/docs/rendering-elements.html)

* [Components](https://reactjs.org/docs/components-and-props.html)

* [JSX](https://reactjs.org/docs/introducing-jsx.html)
  
  * [JSX expressions](https://reactjs.org/docs/jsx-in-depth.html)

* [Props](https://reactjs.org/docs/components-and-props.html)

* [State](https://reactjs.org/docs/state-and-lifecycle.html)

* [Event handling](https://reactjs.org/docs/handling-events.html)

* [React forms](https://reactjs.org/docs/forms.html)

* [Hooks](https://reactjs.org/docs/hooks-intro.html)

  * [useState](https://reactjs.org/docs/hooks-state.html)
  
  * [useEffect](https://reactjs.org/docs/hooks-effect.html)

* [React styling](https://reactjs.org/docs/faq-styling.html)

* [Conditional rendering](https://reactjs.org/docs/conditional-rendering.html)

* [React testing](https://reactjs.org/docs/testing.html)

* [Lists and keys](https://reactjs.org/docs/lists-and-keys.html)

* [Deploying to GitHub Pages](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/creating-a-github-pages-site)

## Learning Objectives

You will be employer-ready if you are able to:

* Identify the differences between a class-based and functional-based component.

* Identify the pros and cons of using React single-page applications (SPAs).

* Use React props.

* Manage state using React.

* Use React Hooks.

* Use Jest to test React components.

<hr>

## ES6

[Back to top](#student-resources)

* [ES6 CheatSheet](https://github.com/DrkSephy/es6-cheatsheet)
* [What is ES6](https://medium.freecodecamp.org/write-less-do-more-with-javascript-es6-5fd4a8e50ee2)
* [`var` vs `let` vs `const`](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)
* [Arrow notation `() => {}`](https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26)
* [Class Construction](https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/)
* [ES6 Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
    * This includes all available array prototype methods, but some new to ES6 are `forEach()`, `map()`, etc.
* [Recursion](https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea)
    * You can learn more about recursion [here](#student-resources)


## REACT

[Back to top](#student-resources)

[Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
This article written by Dan Abramov (Redux Author, React Core Contributor, Create React App Core Contributor).

He describes the pattern of separating components into "container" and "presentational" components.
In a nutshell, this can be explained as follows:

- Container components are primarily concerned with how things work and render very little, if any of their own markup. Instead they mostly render other components and pass down the logic and data they need to work.

- Presentational components are concerned with how things look and typically don't contain any logic that doesn't have to do with their own individual UI.

- This pattern helps us build components with little to no coupling that can more easily be reused in different parts of app or even across applications. It also lets us stub out our applications appearance by writing presentational components first, and then writing container components once we're ready to make things work.

The most important takeaway should be that there should be a few of these "container" components which act as the "brain" for their children.

* [React Lifecycle Methods- how and when to use them](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1)

* [Forms](https://reactjs.org/docs/forms.html)

* [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)


* [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)


- Create React App allows us to use ES7 property initializer syntax. This allows us to attach properties to the class instance without writing out a constructor method - https://babeljs.io/docs/en/babel-plugin-transform-class-properties/

- `setState` is built-in to all class components. We use this method to update our component's state by passing it an object containing parts of the component's state we want to update and their new values.

- Children: https://reactjs.org/docs/introducing-jsx.html#specifying-children-with-jsx (edited)

## Resources

Here are some additional resources to help solidify the topics covered in this unit.

### Git Guide: Deploying to GitHub Pages

Refer to the Git Guide to review the Git concept for this unit. Watch the `📹 Git Guide` video for an additional walkthrough of the Git concept.

* 📖 [Git Guide: Deploy React App to GitHub Pages](./01-Activities/27-Evr_Git-Deploy/README.md)

* 📹 [Git Guide Video: Deploy React App to GitHub Pages](https://2u-20.wistia.com/medias/x6ugnklpf6)

### General

Refer to these resources for additional information about topics covered in this unit.

* 📖 [React Docs: Getting Started](https://reactjs.org/docs/getting-started.html)

* 📖 [Create React App Docs](https://create-react-app.dev/docs/getting-started/)

* 📖 [Create React App: Deployment](https://create-react-app.dev/docs/deployment)
  
---