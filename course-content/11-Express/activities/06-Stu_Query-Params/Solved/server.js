const express = require('express');
const { sortData } = require('./sortData');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

const sortHelper = (type) =>
  termData.sort(sortData('name', 'relevance', `${type}`));

// GET route to get all of the terms or all the terms sorted
app.get('/api/terms/', (req, res) => {
  // console.log(req.params, 'first');
  //☝️ What is the difference between a route parameter and a query string?
  //🙋 Route parameters are denoted in Express.js by a colon, while query strings are denoted with a question mark.
  // Check and see if there is a query parameter at all
  console.log("req.query", req.query);
  const hasQuery = Object.keys(req.query).length > 0;

  // If we have a query of 'sort' and it's value is 'dsc' send the results in descending order
  if (hasQuery && req.query.sort === 'dsc') {
    return res.json(sortHelper('dsc'));
  }

  // If we have a query of 'sort' and it's value is 'asc' send the results in ascending order
  if (hasQuery && req.query.sort === 'asc') {
    return res.json(sortHelper('asc'));
  }

  // If there is no query parameter, return terms
  return res.json(termData);
});

// GET route that returns any specific term
app.get('/api/term/:term', (req, res) => {
  const requestedTerm = req.params.term.toLowerCase();
    // http://localhost:3001/api/term/seo
    console.log("req.params", req.params);
    // http://localhost:3001/api/term/seo?t=moana
    console.log("req.query", req.query); 

  // Iterate through the terms name to check if it matches `req.params.term`
  if (requestedTerm) {
    for (let i = 0; i < termData.length; i++) {
      if (requestedTerm === termData[i].term.toLowerCase()) {
        return res.json(termData[i]);
      }
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No term found');
});

// GET route for returning all terms from a given category
app.get('/api/terms/:category', (req, res) => {
  const requestedCategory = req.params.category.toLowerCase();
  const result = [];

  for (let i = 0; i < termData.length; i++) {
    const currentTermCategory = termData[i].category;
    if (requestedCategory === currentTermCategory) {
      result.push(termData[i]);
    }
  }
  return res.json(result);
});

app.get('/api/categories', (req, res) => {
  // Make an array with all the categories
  const categories = termData.map((term) => term.category);
  // ["web", "cloud", "cloud", "web", "networking"]

  // Filter duplicate categories from the array
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  const result = categories.filter((cat, i) => categories.indexOf(cat) === i);
  // ["web", "cloud", "networking"]

  // Return the result
  return res.json(result);
});

// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);
