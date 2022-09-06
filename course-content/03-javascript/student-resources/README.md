[Return to Javascript](../README.md#javascript)

<hr>
<img src="../../00-admin-resources/assets/images/javascript.jpg" alt="javascript" width="75"> 

# Student Resources


## Table of Contents

### Terminology & Links

1.  [What is Javascript](#what-is-javascript)
2.  [Variables](#variables)
3.  [Javascript Strings](#javascript-strings)
4.  [Javascript undefined](#javascript-undefined)
5.  [Javascript Numbers](#javascript-numbers)
6.  [Javascript Booleans](#javascript-booleans)
7.  [Javascript Arrays](#javascript-arrays)
8.  [Javascript Objects](#javascript-objects)
9.  [Javascript Null](#javascript-null)
10. [Javascript Conditional and Control Flow](#javascript-condtional-and-control-flow)
11. [Javascript For Loop](#javascript-for-loops)
12. [Javascript While Loops](#javascript-while-loops)
13. [Javascript Until Loops](#javascript-until-loops)
14. [Javascript Functions](#javascript-function)
15. [Javascript Built In Methods](#javascript-built-in-method)
16. [Javascript this](#javascript-this)
17. [Javascript Aside](#javascript-this)
18. [Your Guide to Semicolons in JavaScript](#javascript-this)
19. [Javascript Workbook](Workbook.md)

### Video Resources
01. [JavaScript Crash Course For Beginners](https://www.youtube.com/watch?v=hdI2bqOjy3c)

<hr>

## Overview

We've already explored how to structure webpages with HTML and style them with CSS. This week, with the help of JavaScript, we will learn how to make webpages dynamic.

**JavaScript** is a widely used scripting language that adds functionality and interactivity to a webpage. Building on a static HTML framework and CSS styling, with JavaScript you can store information in variables, manipulate your HTML, respond to an event, play audio and video, add decision-making to your code, and do much more. 

As the only programming language native to web browsers, JavaScript is used all over the web&mdash;making it a crucial skill in your toolbox. But Javascript development skills are also versatile. Once you have mastered JavaScript, it is much easier to pick up the fundamentals of other programming languages. 

<hr>

#### What is Javascript
[Back to top](#student-resources)

> JavaScript is the third piece of the three fundamental programming languages of the modern web (along with HTML, CSS).

> JavaScript allows developers to create dynamic web applications capable of taking in user inputs, changing what’s displayed to users, animating elements, and much more.

Your javascript code, `for now`, will go on your HTML file, in the body, and between your script tags:

```
<body>
  <script type="text/javascript">
    <!-- JavaScript Magic -->
  </script>
</body>
```
<hr>

##### Variables
[Back to top](#student-resources)

Variable Names:

* All names start with a letter.

* Avoid single letter names. Be descriptive with your naming.

* Use `camelCase` when naming objects, functions, and instances.

Use `PascalCase` when naming constructors or classes

>Words created by concatenating capitalized words. An example is this page's title, PascalCase. Sometimes called "UpperCamelCase", or "DromedaryCase". Distinguished from CamelCase by the restriction that the first letter must be upper case. ("camelCase" isn't PascalCase, but "PascalCase" is.)

Always use var to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. Captain Planet warned us of that.

Use one `var` declaration per variable. It's easier to add new variable declarations this way, and you never have to worry about swapping out `a` ; for `a` , or introducing punctuation-only diffs.

Declare unassigned variables last. This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.

```

var variableName = value;

var variableName = "String";

var variableName = true;

var variableName = 42;

var variableName = [1,2,3];

```

> The syntax for creating a new variable and assigning it a value is as follows:
> * var + the variable names
> * = the equal sign (the assignment operator). The variable name should go left of the value to be assigned.
> * to the right of the = / equal sign (the assignment operator) we should place the value to be assigned. This can be Numbers, Strings, Boolean, Arrays, etc

> Variables are the nouns of programming.

> They are “things” (Numbers, Strings, Booleans, etc.).

> They are composed of variable names and values

>When you use "var" , you are instantiating a variable in the current scope. This will also prevent access of variables named the same in higher scope, within the current scope.

<hr>

#### Javascript Strings
[Back to top](#student-resources)

> The String Data Type (denoted by double or single quotes) and strings returned from String calls in a non-constructor context (i.e., without using the new keyword) are primitive strings. JavaScript automatically converts primitives to String objects, so that it's possible to use String object methods for primitive strings.

```
var newString = "I am a new string";
```
or

```
"I am a lonely string not assigned to a variable"
'I am a string made with single quotes'
```
<hr>

#### Javascript undefined
[Back to top](#student-resources)


The Javascript undefined datatype is s primitive value automatically assigned to variables that have just been declared or to formal arguments for which there are no actual arguments.

<hr>

#### Javascript Numbers
[Back to top](#student-resources)


> The JavaScript Number Datatype - Javascript has only one type of number. Numbers can be written with, or without, decimals.

Incrementing Numbers

```
var i = 0;
i++ // increments the value by 1
//Same As:
i = i + 1;
i += 1

```

```
i-- // decrements the value by 1
//Same As:
i = i -1;
i -= 1;
```

* **Operators**

```
+ - * /  
```
<hr>

#### Javascript Booleans
[Back to top](#student-resources)

`true`

`false`

> A JavaScript Boolean datatype represents one of two values: true or false.


#### Javascript Array


* [Arrays](https://www.w3schools.com/js/js_arrays.asp)

> Arrays are a type of variable that are collections.

> JavaScript arrays are used to store multiple values in a single variable.

> These collections can be made up of strings, numbers, booleans, other arrays, objects, anything.

> Each element of the array is marked by an index.

> Indexes always start with 0.

> Index Values start at 0

> To access a value in an array state the name of the array and then access it's index with the [ ] syntax: example:

```
var myFarm = ["Apples", "Walnut", "Emu berry", "Star Fruit", "Olive Fruit","Macadamia","Elderberry Fruit "];

// to access the element at the first index (index 0):

var firstElement = myFarm[0]

```
<hr>

#### Javascript Objects


An **Object** refers to either a custom made object or one of Javascript's datatypes.
Each Data Type has methods built in:
Six [data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) that are primitives:
 * Boolean: Boolean represents a logical entity and can have two values: true, and false.
 * Null: The Null type has exactly one value: null. See [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) and Null for more details.
 * Undefined: A variable that has not been assigned a value has the value undefined. See [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) and Undefined for more details.
 * Number: According to the ECMAScript standard, there is only one number type: Both Floats (1.0) and integers (1) are under number.
 * String: JavaScript's [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) type is used to represent textual data
 * Symbol (new in ECMAScript 6): Symbols are new to JavaScript in ECMAScript Edition 6. A [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) is a unique and immutable primitive value and may be used as the key of an Object property (see below).
 * Object: In computer science, an object is a value in memory which is possibly referenced by an identifier.

[more on Objects](https://www.w3schools.com/js/js_object_methods.asp)

#### Javascript Null
[Back to top](#student-resources)


>The Javascript Null Datatype: In computer science, a null value represents a reference that points, generally intentionally, to a nonexistent or invalid object or address. The meaning of a null reference varies among language implementations.


<hr>

#### Javascript Conditional and Control Flow
[Back to top](#student-resources)


* [Conditionals](https://www.w3schools.com/js/js_if_else.asp)

> Each statement is composed of an if, else-if, or else (keyword), a condition, and the resulting code in { } curly brackets.

```

if (condition to be checked goes here) {
  /*If the condition is true this code gets executed*/
  /*This code is between the Curly Braces*/
}
```
* [Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)

```
==	equal to

===	equal value and equal type

!=	not equal

!==	not equal value or not equal type

>	greater than

<	less than

>=	greater than or equal to

<=	less than or equal to
```

```
Given that x = 6 and y = 3, the table below explains the logical operators:

&&	and	(x < 10 && y > 1) is true

||	or	(x == 5 || y == 5) is false

!	not	!(x == y) is true

```

#### Javascript For-Loops
[Back to top](#student-resources)

* [For-Loops](https://www.w3schools.com/js/js_loop_for.asp)

Helps us 'DRY' (Don't Repeat Yourself) our code. We loop through each index of an Array:

```
var array = ["I","am", "an","array","with", "multiple","elements"];

for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```
#### Javascript Functions
[Back to top](#student-resources)

**Functions**
* [console.log()](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)
* [alert()](https://www.w3schools.com/jsref/met_win_alert.asp)
* [prompt()](https://www.w3schools.com/jsref/met_win_prompt.asp)
* [confirm()](https://www.w3schools.com/jsref/met_win_confirm.asp)
* [document.write()](https://www.w3schools.com/jsref/met_doc_write.asp)
* [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
* [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

* [DOM Events](https://www.w3schools.com/jsref/dom_obj_event.asp)
* [Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
* [Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

#### [CREATING FUNCTIONS](https://www.w3schools.com/js/js_functions.asp)

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

The function is composed of two parts:
1. The function definition.
Arguments bind on function calls, and demonstrate that argument names are only visible inside of the function body.

2. The function call (or execution).

```

function myFunctionName(argument1, argument2) {
  /*code inside {} will be executed*/
}
```

When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":

```
var x = myFunction(4, 3);        // Function is called, return value will end up in x

function myFunction(a, b) {
    return a * b;                // Function returns the product of a and b
}
```

## [Function Declaration]()

```JavaScript
function name([param,[, param,[..., param]]]) {
   [statements]
}
```
```code
name
```
The function name.

```code
param
```
The name of an argument to be passed to the function. Maximum number of arguments varies in different engines.

```code
statements
```
The statements which comprise the body of the function.

### Description

A function created with a `function` declaration is a Function object and has all the properties, methods and behavior of Function objects. See [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) for detailed information on functions.

A function can also be created using an expression: `function expression`.

By default, functions return `undefined`. To return any other value, the function must have a `return` statement that specifies the value to return.

### Conditionally created functions

Functions can be conditionally declared, that is, a function statement can be nested within an if statement. Most browsers other than Mozilla will treat such conditional declarations as an unconditional declaration and create the function whether the condition is true or not, see this [article](http://kangax.github.io/nfe/#function-statements) for an overview. For this reason, they should not be used — for conditional creation use function expressions instead.

### Function declaration hoisting
`Function declarations` in JavaScript are hoisting the function definition. You can use the function before you declared it:

```JavaScript

hoisted(); // logs "foo"

function hoisted() {
  console.log('foo');
}
```

Note that `function expressions` are not hoisted:

```JavaScript
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {
   console.log('bar');
};
```

### Examples
#### Using `function`

The following code declares a function that returns the total amount of sales, when given the number of units sold of products `a`, `b`, and `c`.

```javascript
function calc_sales(units_a, units_b, units_c) {
   return units_a * 79 + units_b * 129 + units_c * 699;
}
```

#### Javascript Built In Methods

**JavaScript Methods**
* [HTML DOM appendChild() Method](https://www.w3schools.com/jsref/met_node_appendchild.asp)
* [Element.setAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
* [Using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
* [Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

>JavaScript methods are the actions that can be performed on objects.

>A JavaScript method is a property containing a function definition.

#### Asides
[Back to top](#student-resources)

Brackets:
```

[ ]
```
Braces:
```

{ }
```

camelCase:
```

var myFirstVariable = value;
```

#### Your Guide to Semicolons in JavaScript
[Back to top](#student-resources)

When do you need a semicolon? Here’s a handy cheat sheet…

REQUIRED: WHEN TWO STATEMENTS ARE ON THE SAME LINE

The semicolon is only obligatory when you have two or more statements on the same line:

```
var i = 0; i++        // <-- semicolon obligatory
                      //     (but optional before newline)
var i = 0             // <-- semicolon optional
    i++               // <-- semicolon optional
```

OPTIONAL: AFTER STATEMENTS

The semicolon in JavaScript is used to separate statements, but it can be omitted if the statement is followed by a line break (or there’s only one statement in a {block}). A statement is a piece of code that tells the computer to do something. Here are the most common types of statements:

```
var i;                        // variable declaration
i = 5;                        // value assignment
i = i + 1;                    // value assignment
i++;                          // same as above
var x = 9;                    // declaration & assignment
var fun = function() {...};   // var decl., assignmt, and func. defin.
alert("hi");                  // function call
```

All of these statements can end with a ; but none of them must. Some consider it a good habit to terminate each statement with a ; – that makes your code a little easier to parse, and to compress: if you remove line breaks you needn’t worry about several statements ending up unseparated on the same line.

AVOID!

1. After a closing curly bracket

You shouldn’t put a semicolon after a closing curly bracket }. The only exceptions are assignment statements, such as var obj = {};, see above.

```
// NO semicolons after }:
if  (...) {...} else {...}
for (...) {...}
while (...) {...}
```

2. After the round bracket of an if, for, while or switch statement

It won’t harm to put a semicolon after the { } of an if statement (it will be ignored, and you might see a warning that it’s unnecessary).

```
if (0 === 1); { alert("hi") }

// equivalent to:

if (0 === 1) /*do nothing*/ ;
alert ("hi");
```

This code will alert “hi”, but not because 0 equals 1, but because of the semicolon. It makes JavaScript think that you have an empty statement there, and everything to the right of it is treated as no longer belonging to the if conditional and thus independent of it.


An important quirk: inside the () of a for loop, semicolons only go after the first and second statement, never after the third:

```
for (var i=0; i < 10; i++)  {/*actions*/}       // correct
for (var i=0; i < 10; i++;) {/*actions*/}       // SyntaxError
```


<hr>

## Key Topics

The following topics will be covered in this unit:

 * [`<script>` tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

 * [Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

 * [Primitive types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
 
 * [Logical and comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
 
 * [Conditional statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
 
 * [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
 
 * [Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods)

 * [String methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Instance_methods)
 
 * [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
 
 * [Object methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_methods)
 
 * [Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
 
 * [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
 
 * [Scoping](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Variable_scope) 
 
 * [`this` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

## Learning Objectives

You will be employer-ready if you are able to: 

* Implement complex decision-making in your code using `if` and `if-else` statements. 

* Explain the difference between equality (`==`) and strict equality (`===`). 

* Store related data in an array and use array methods to mutate and perform operations on the array. 

* Explain functions and how they are used in JavaScript.

* Explain the difference between function declarations and function expressions. 

* Recognize whether a variable is locally or globally scoped and explain the difference.

* Create objects and use object methods. 

* Use the keyword `var` to declare a variable. 

## Technical Interview Preparation

You will be employer-competitive if you are able to solve the following algorithms and successfully complete the assessments.

### Algorithms

Practicing algorithm-based interview questions is one of the best ways to prepare for interviews. Watch the 📹 Let's Code video(s) for tips and tricks on how to solve the algorithms.

* [01: Arithmetic](03-Algorithms/01-arithmetic)

* [02: Odd or Even](03-Algorithms/02-odd-or-even)

  * [📹 Let's Code Odd or Even!](https://2u-20.wistia.com/medias/bnqjr1owj7)

* [03: Log Nums](03-Algorithms/03-log-nums)

### Assessments

Assess your knowledge by answering technical interview questions and solving coding challenges.

* [Unit 03 Assessment](https://forms.gle/WQNAEujgFBVm6kc79)

## Homework 

You'll create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## Career Connection

Career Services material for this unit is located in the [Career Connection folder](04-Career-Connection/README.md). For more information about Career Services, including coding milestones, demo days, technical toolkits, workshops, and additional resources, visit the [Career Services website](https://mycareerspot.org/).

## Heads-Up

In the next unit, you will learn to harness the power of Web APIs to add complex functionality to your JavaScript with just a few lines of code. 

## Resources

Here are some additional resources to help solidify the topics covered in this unit.

### Git Guide

Refer to the Git Guide to review the git concept for this unit. Watch the `📹 Git Guide` video for an additional walkthrough of the git concept.

  * 📖 [Git Guide: Git Branch](./01-Activities/27-Evr_Git-Branch)

  * 📹 [Git Guide Video: Git Branch](https://2u-20.wistia.com/medias/73tr86ngck)

### General

Refer to these resources for additional information about topics covered in this unit.

* [📖 Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/open)

* [📖 MDN Web Docs on JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
