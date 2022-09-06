const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://localhost:27017/authorListDB`;

let db;

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    // Drops any documents, if they exist
    db.collection('authorList').deleteMany({});
    // Adds data to database
    db.collection('authorList').insertMany(data, (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log(res.ops);
    });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);

// Data for document
const data = [
  {
    title: 'Good Omens',
    // One-to-many relationship
    // Each book has multiple authors
    authors: [
      { name: 'Neil Gaiman', featured: true },
      { name: 'Terry Pratchett', featured: true },
    ],
    information: { ISBN: 9780425132159, price: 10, total_in_stock: 10 },
  },
  {
    title: 'Heads You Lose',
    authors: [
      { name: 'Lisa Lutz', featured: false },
      { name: 'David Hayward', featured: false },
    ],
    // One-to-one embedded document relationship
    // Each book has one set of information
    information: { ISBN: 9780399157400, price: 20, total_in_stock: 8 },
  },
  {
    title: 'Between the Lines',
    authors: [
      { name: 'Jodi Picoult', featured: true },
      { name: 'Samantha Van Leer', featured: false },
    ],
    information: { ISBN: 9781451635751, price: 5, total_in_stock: 5 },
  },
];

app.use(express.json());

// Accessing embedded document with one-to-one relationship
// http://localhost:3001/price-less-than-10
app.get('/price-less-than-10', (req, res) => {
  db.collection('authorList')
    // Use dot notation to query on an embedded document
    .find({ 'information.price': { $lt: 10 } })
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});

// Accessing embedded document with one-to-many relationship
// http://localhost:3001/featured-authors
app.get('/featured-authors', (req, res) => {
  db.collection('authorList')
    .find({ 'authors.featured': true })
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});

app.get('/price-more-than-or-eq-10-and-featured-authors', (req, res) => {
  db.collection('authorList')
    // Use dot notation to query on an embedded document
    .find({ 'information.price': { $gte: 10  }, 'authors.featured': true })
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});
