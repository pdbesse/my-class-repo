import { useEffect, useState } from "react";
//Inside the useEffect Hook, if a return statement is provided, 
//then the function that is returned gets run every time the component unmounts or 
//right before the next useEffect is called. This is known as a "cleanup" function because 
//it is designed to tie up the loose ends in effects that are dependant on outside effects. 
//In our case, the outside effect is the handler timeout we created.

//using Custom Hooks by creating a useDebounce Hook that will delay the invoking of a function 
//for a given number of milliseconds.

//the article below the search bar only updated once we finished typing.
//Our Custom Hook starts with the word use.
//useDebounce takes in two parameters: value and delay.
const useDebounce = (value, delay) => {
  //We will use the useEffect and useState Hooks in our custom Hook.
  //The state is controlled with a Hook at the top level of our useDebounce Hook.
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      //We create a setTimeout method and set it to a variable called handler so that we may later clearTimeout.
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value or delay changes
      // We return a function that clears the timeout.
      return () => {
        clearTimeout(handler);
      };
    },
    // Only call the effect if value or delay changes.
    [value, delay]
  );

  return debouncedValue;
};

export default useDebounce;
