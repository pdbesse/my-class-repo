const express = require('express');
// Run npm install mongodb and require mongodb and MongoClient class
// 🔑 To integrate MongoDB into an existing Express server, 
//we must install the mongodb package using the command npm install mongodb, and require mongodb and the MongoClient class in the server.js file.
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;

// Connection string to local instance of MongoDB including database name
// 🔑 We connect to a local instance of MongoDB, including the database name, 
// using mongodb://localhost:27017/ and appending the database name.
const connectionStringURI = `mongodb://localhost:27017/inventoryDB`;

// Declare a variable to hold the connection
let db;

// Creates a connection to a MongoDB instance and returns the reference to the database
mongodb.connect(
  // Defines connection between app and MongoDB instance
  connectionStringURI,
  // Sets connection string parser and Server Discover and Monitoring engine to true and avoids warning
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    // Use client.db() constructor to add new db instance
    // 🔑 We then use the db variable to create a connection to a MongoDB instance 
    // and return the reference to the database.
    db = client.db();
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);

// Built in Express function that parses incoming requests to JSON
app.use(express.json());

// Post request to create a single document to collection
app.post('/create', (req, res) => {
  // collection() creates or selects instance of collection. Takes in collection name
  // insertOne() inserts single document into collection. Takes in object.
  db.collection('bookCollection').insertOne(
    { title: req.body.title, author: req.body.author },
    // Handles error or results
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

// http://localhost:3001/create-many
// Post request to add multiple document to collection
app.post('/create-many', function (req, res) {
  db.collection('bookCollection').insertMany(
    [
      {"title" : "Oh the Places We Will Go!"},
      {"title" : "Diary of Anne Frank"}
    ], 
    (err,results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

// Get request to read all the documents in a collection
app.get('/read', (req, res) => {
  db.collection('bookCollection')
    // find() returns all documents. Equivalent to `Select *` in SQL.
    .find({})
    // Returns all the documents in an array
    .toArray((err, results) => {
      // Handles error or results
      if (err) throw err;
      res.send(results);
    });
});
