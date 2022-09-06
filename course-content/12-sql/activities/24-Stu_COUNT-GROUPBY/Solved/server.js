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
    // MySQL Username
    user: 'root',
    // TODO: Add MySQL Password
    password: 'password',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
);

// CREATE TABLE favorite_books (
//   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   section INT NOT NULL,
//   book_name VARCHAR(30) NOT NULL,
//   in_stock BOOLEAN,
//   quantity INT NOT NULL
// );

// Query database using COUNT() and GROUP BY
db.query('SELECT COUNT(id) AS total_count, in_stock FROM favorite_books GROUP BY in_stock, section', function (err, results) {
  console.log("'SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock'", results);
});
// [ { total_count: 10, in_stock: 1 } - true in stock, { total_count: 3, in_stock:0 } ] - false not in stock


// Query database using SUM(), MAX(), MIN() AVG() and GROUP BY
db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
  console.log(results);
});

// [
//   {
//     total_in_section: '53', // 11 + 4 + 15 + 23 (=53) ("The Great Gatsby", 1, true, 11)  ("Huckleberry Finn", 1, true, 4) ("Crime and Punishment", 1, true, 15) ("Catcher in the Rye", 1, true, 23)
//     max_quantity: 23, //"Catcher in the Rye", 1, true, 23
//     min_quantity: 4, //"Huckleberry Finn", 1, true, 4
//     avg_quantity: '13.2500' // 53 /4 => 13.25
//   },
//   {
//     total_in_section: '8',
//     max_quantity: 8,
//     min_quantity: 0,
//     avg_quantity: '4.0000'
//   },
//   {
//     total_in_section: '9',
//     max_quantity: 9,
//     min_quantity: 0,
//     avg_quantity: '4.5000'
//   },
//   {
//     total_in_section: '22',
//     max_quantity: 11,
//     min_quantity: 11,
//     avg_quantity: '11.0000'
//   },
//   {
//     total_in_section: '32',
//     max_quantity: 18,
//     min_quantity: 0,
//     avg_quantity: '10.6667'
//   }
// ]

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
