const express = require('express');

const PORT = 3001;
const reviews = require('./db/reviews.js');

const app = express();

// Middleware for parsing application/json
app.use(express.json());

// Middleware for urlecoded data
// `urlencoded` data represents a URL encoded form. If we had a HTML form with fields: `username` and `password`, our urlencoded data would be "username=JohnAppleseed&password=passw0rd"
// This middleware will parse that string into an object containing key value pairs
// We also pass an additional options object to express.urlencoded(). The extended option allows us to choose whether we want to parse strings with the included qs library:
// Note: qs is a library that parses and stringifies queries and provides additional security.
app.use(express.urlencoded({ extended: true }));

// GET request for ALL reviews
app.get('/api/reviews', (req, res) => {
  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);
  console.log("req.route.path", req.route.path);
  console.log("req.originalUrl", req.originalUrl);

  // Sending all reviews to the client
  return res.json(reviews);
});

// GET request for a single review
app.get('/api/reviews/:review_id', (req, res) => {
  if (req.body && req.params.review_id) {
    console.info(`${req.method} request received to get a single a review`);
    const reviewId = req.params.review_id;
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      if (currentReview.review_id === reviewId) {
        res.json(currentReview);
        return;
      }
    }
    res.json('Review ID not found');
  }
});



// POST request to add a review
app.post('/api/reviews', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);
  console.info(`${req.method} request received to get reviews`);
  console.log("req.route.path", req.route.path);
  console.log("req.originalUrl", req.originalUrl);
  console.log("req.url", req.url);
  console.log("req.method", req.method);
  console.log("req", req);

  // Prepare a response object to send back to the client
  let response;

  // Check if there is anything in the response body
  if (req.body && req.body.product) {
    response = {
      status: 'success',
      data: req.body,
    };
    res.json(`Review for ${response.data.product} has been added!`);
  } else {
    res.json('Request body must at least contain a product name');
  }

  // Log the response body to the console
  console.log(req.body);
});


// URL-encoded data represents another way to submit a request body to the server besides JSON, which we are used to.

// For example, if we had an HTML form with an upvote field, the URL-encoded data would look something like this:

// TODO: upvote
// Create a new POST request to /api/upvotes/:review_id, substituting review_id for the id that you copied from the GET request.

// In the Insomnia interface, choose the body type as Form URL encoded, and enter upvote as the key, with a value of true.

  // example: http://localhost:3001/api/upvotes/82a3
  // {
  //   "upvote": true
  // }

app.post('/api/upvotes/:review_id', (req, res) => {
  // Log our request to the terminal
  if (req.body && req.params.review_id && req.body.upvote) {
    console.info(`${req.method} request received to upvote a review`);

    let requestedUpvote;
    // Coerce the string value to a boolean value (only needed for URL encoded body)
    if (typeof req.body.upvote === 'boolean') {
      requestedUpvote = req.body.upvote;
    } else {
      // requestedUpvote = true;
      console.log(req.body.upvote == 'true');
      requestedUpvote = req.body.upvote == 'true';
    }


    // Log the request body
    console.info(req.body);

    const reviewId = req.params.review_id;

    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      if (currentReview.review_id === reviewId && requestedUpvote) {
        currentReview.upvotes += 1;
        res.json(`New upvote count is: ${currentReview.upvotes}`);
        return;
      }
    }
    res.json('Review ID not found');
  }
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
