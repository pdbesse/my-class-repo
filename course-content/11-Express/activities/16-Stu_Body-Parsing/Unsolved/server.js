const express = require('express');

const PORT = 3001;
const reviews = require('./db/reviews.js');

const app = express();


// TODO: Implement middleware for the parsing of JSON data

// TODO: Implement middleware for parsing of URL encoded data

// GET request for ALL reviews
app.get('/api/reviews', (req, res) => {
  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);

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

  // Prepare a response object to send back to the client
  let response;
  console.log(req.body);
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

app.post('/api/upvotes/:review_id', (req, res) => {
  // Log our request to the terminal
  if (req.body && req.params.review_id && req.body.upvote) {
    console.info(`${req.method} request received to upvote a review`);

    let requestedUpvote;
    // Coerce the string value to a boolean value (only needed for URL encoded body)
    if (typeof req.body.upvote === 'boolean') {
      requestedUpvote = req.body.upvote;
    } else {
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
