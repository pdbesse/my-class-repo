const express = require('express');
// Run npm install mongodb and require mongodb and MongoClient class
// 🔑 To integrate MongoDB into an existing Express server, 
// we must install the mongodb package using the command npm install mongodb, 
// and require mongodb and the MongoClient class in the server.js file.
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;

// Connection string to local instance of MongoDB including database name
// 🔑 We connect to a local instance of MongoDB, including the database name, 
// using mongodb://localhost:27017/ and appending the database name.
const connectionStringURI = `mongodb://localhost:27017/shelterDB`;

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

app.use(express.json());

// http://localhost:3001/create
// {
//     "name": "Farley",
//     "breed": "Tabby"
// }
app.post('/create', (req, res) => {
  // Use db connection to add a document
  db.collection('petCollection').insertOne(
    { name: req.body.name, breed: req.body.breed },
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

// http://localhost:3001/read
app.get('/read', (req, res) => {
  // Use db connection to find all documents in collection
  db.collection('petCollection')
    .find()
    .toArray((err, results) => { // Returns all the documents in an array / parses out what we want
      //https://www.mongodb.com/docs/manual/reference/method/cursor.toArray/
      // The toArray() method returns an array that contains all the documents from a cursor. 
      // The method iterates completely the cursor.
      // Returns: An array of documents.
      if (err) throw err;
      res.send(results);
    });
});
