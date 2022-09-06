const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'password',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

// Query database
db.query('SELECT * FROM students', function (err, results) {
  console.log("********* SELECT * FROM students results[0]");
  console.log(results[0]);
  console.log("*********");
});

db.query('SELECT first_name, last_name FROM students', function (err, results) {
  console.log("********* SELECT first_name, last_name FROM students");
  console.log(results);
  console.log("*********");
});


// Query database
db.query('SELECT * FROM students WHERE first_name = "Elliot"', function (err, results) {
  console.log("********* SELECT * FROM students WHERE first_name = 'Elliot', results[0]");
  console.log(results[0]);
  console.log("*********");
});

db.query('SELECT * FROM students WHERE enrolled = true', function (err, results) {
  console.log("********* SELECT * FROM students WHERE enrolled = true");
  console.log(results);
  console.log("*********");
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
