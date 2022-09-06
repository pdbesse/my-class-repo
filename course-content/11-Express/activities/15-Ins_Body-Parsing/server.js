const express = require('express');

const PORT = 3001;
const reviews = require('./db/reviews.js');

const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//extended: This option allows to choose between parsing the URL-encoded data with the querystring library (when false) 
// or the qs library (when true). 
// The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded. 
// For more information, please see the qs library: https://www.npmjs.com/package/qs#readme
// Note: qs is a library that parses and stringifies queries and provides additional security.
// For example, if we had an HTML form with an upvote field, the URL-encoded data would look something like this:
// "upvote=true"
// Parsing this data would allow us to access these key-value pairs in an object:
// {
//   "upvote": true,
// }

// {
//   "name": "Asher",
//   "role": "Filth Lord",
//   "age": 3,
//   "forcePoints": 2000
//    "friend" : [{
//          "name": "Farley",
//          "role": "Furry Lord",
//          "age": 3,
//          "forcePoints": 2000
//      }]
// }


// TODO
// Create a new POST request to lhttp://localhost:3001/api/reviews and select the Body tab. From the Body drop-down menu, choose JSON.

// Copy the following request object and click Send:
// http://localhost:3001/api/reviews
// {
//   "product": "Corsair K100",
//   "username": "1337gamer",
//   "review": "This keyboard has a nice response time!",
//   "id": 5
// }


// GET request for ALL reviews
app.get('/api/reviews', (req, res) => {
  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);

  // Sending all reviews to the client
  return res.json(reviews);
});

// POST request to add a review
app.post('/api/reviews', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // Prepare a response object to send back to the client
  let response;

  // Check if there is anything in the response body
  if (req.body && req.body.product) {
    response = {
      status: 'success',
      data: req.body,
    };
    reviews.push(req.body);
    res.json(`Review for ${response.data.product} has been added!`);
  } else {
    res.json('Request body must at least contain a product name');
  }

  // Log the response body to the console
  console.log(req.body);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
