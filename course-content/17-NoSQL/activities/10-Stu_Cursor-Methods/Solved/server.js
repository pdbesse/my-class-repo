const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://localhost:27017/numbersDB`;

let db;

const data = [
  { number: 1 },
  { number: 7 },
  { number: -3 },
  { number: 11 },
  { number: 12 },
  { number: 1000 },
  { number: 8 },
  { number: 2 },
  { number: 15 },
  { number: 4 },
  { number: 2 },
  { number: 90 },
];

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    db.collection('authorList').deleteMany({});
    db.collection('numberList').insertMany(data, (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log('Data inserted');
    });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);

app.use(express.json());

// Get request to read all the documents in a collection
app.get('/read', (req, res) => {
  db.collection('numberList')
    // find() returns all documents. Equivalent to `Select *` in SQL.
    .find()
    // sort() sorts in ascending or descending order
    // Specify in the sort parameter the field or fields to sort by and a value 
    // of 1 or -1 to specify an ascending or descending sort respectively.
    // 1 ascending, -1 descending
    .sort({ number: -1 })
    .skip(5)
    .limit(5)
    // The toArray() method returns an array that contains all the documents from a cursor. 
    // The method iterates completely through the cursor
    .toArray((err, results) => {
      // Handles error or results
      if (err) throw err;
      res.send(results);
    });
});
