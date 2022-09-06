// 1. Object
const nodejs = {
  name: 'Node.js',
  type: 'JavaScript runtime environment',
};

const { name, type } = nodejs;

console.log(name); // <= Node.js
console.log(type); // <= JavaScript runtime environment

// 2. Nested Object
const js = {
  name: 'JavaScript',
  type: 'programming language',
  version: 'ES6',
  tools: {
    frameworks: {
      framework1: 'AngularJS',
      framework2: 'Vue.js',
    },
    libraries: {
      library1: 'jQuery',
      library2: 'React',
    },
  },
};

const { framework1, framework2 } = js.tools.frameworks;

console.log(framework1); // <= AngularJS
console.log(framework2); // <= Vue.js

// 3. Arrays
const languages = ['HTML', 'CSS', 'JavaScript'];

const [markup, style, scripting] = languages;

console.log(markup, style, scripting); // <= HTML CSS JavaScript
console.log(markup); // <= HTML

//----------------------------------


// 2. NO! DO not do this
// const js = {
//   name: "JavaScript",
//   type: "programming language",
//   version: "ES6",
//   tools: {
//     frameworks: {
//       framework1: "AngularJS",
//       framework2: "Vue.js",
//     },
//     libraries: {
//       library1: "jQuery",
//       library2: "React",
//     },
//   },
// };
// TODO: Destructure the nested object 'js'

// 2. NO! DO not do this
// let {
//   tools: {
//     frameworks: { framework1, framework2 }
//   } 
// } = js;
// console.log(framework1); // <= AngularJS
// console.log(framework2); // <= Vue.js


// 1. Object
const arya = {
  first: "Arya",
  last: "Stark",
  origin: "Winterfell",
  allegiance: "House Stark"
};

const { first, last, origin, allegiance } = arya;
console.log(first); // <= Arya
console.log(last); // <= Stark

//----------------------------------

// 2. Nested Object
const john = {
  first: "John",
  last: "Snow",
  title: "Prince",
  family: {
    brothers: {
      brother1: "Rob Stark",
      brother2: "Rickon Stark"
    },
    sisters: {
      sister1: "Arya Stark",
      sister2: "Sansa Stark"
    }
  }
};

const {family} = john;
const {brothers} = family;
const {brother1 , brother2} = brothers;
console.log(brother1); // <= Rob Stark
console.log(brother2); // <= Rickon Stark


// const { brother1, brother2 } = john.family.brothers;
console.log(brother1); // <= Rob Stark
console.log(brother2); // <= Rickon Stark

// 3. Arrays
const characters = ["Ned Stark", "The Quiet Wolf", "House Stark"];

const [kingsName, alias, kingsAllegiance] = characters;
console.log(kingsName, alias, kingsAllegiance); // <= Ned Stark The Quiet Wolf House Stark

// 4. Strings
const skills = "The Usurper, male, Baratheon, Cersei"; // string of data

const [theAlias, gender, theFamily, spouse] = skills.split(","); // set variables and split
console.log(theAlias, gender, theFamily, spouse); // print them by variable name



//-----------------
