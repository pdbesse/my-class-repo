const express = require('express');
const db = require('./config/connection');
// Require model
const { Book } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/all-books', (req, res) => {
  // Using model in route
  Book.find({}, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});

// Get Aggregate Functions
app.get('/sum-price', (req, res) => {
  // Call aggregate() on model
  Book.aggregate(
    [
      // Filter books that are in stock
      // Filters the documents to pass only the documents that match the specified condition(s) to the next pipeline stage.
      // https://www.mongodb.com/docs/manual/reference/operator/aggregation/match/
      { $match: { inStock: true } },
      {
        //https://docs.mongodb.com/manual/reference/operator/aggregation/group/#-group--aggregation-
        $group: {
          // Group by null (no additional grouping by id)
          // https://docs.mongodb.com/manual/reference/operator/aggregation/group/#std-label-null-example
          // The following aggregation operation specifies a group _id of null, calculating the sum_price, avg_price, max_price, and min_price of all documents in the collection.
          // If you specify an _id value of null, or any other constant value, the $group stage calculates accumulated values for all the input documents as a whole. 
          // _id: null,
          // _id: {instock: "$inStock"},//this works too - vs $match: { inStock: true }
          // Sum of all prices
          sum_price: { $sum: '$price' },
          // Average of all prices
          avg_price: { $avg: '$price' },
          // Maximum price
          max_price: { $max: '$price' },
          // Minimum price
          min_price: { $min: '$price' },
        },
      },
    ],
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    }
  );
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
