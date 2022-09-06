SELECT
  *
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id;

-- +----+-----------------------+----------+------------+----+-------+
-- | id | book_name             | in_stock | book_price | id | price |
-- +----+-----------------------+----------+------------+----+-------+
-- |  1 | The Great Gatsby      |        1 |          1 |  1 |     1 |
-- |  4 | Things Fall Apart     |        0 |          1 |  1 |     1 |
-- |  7 | Decameron             |        0 |          1 |  1 |     1 |
-- |  5 | Crime and Punishment  |        1 |          2 |  2 |     2 |
-- |  2 | Huckleberry Finn      |        1 |          3 |  3 |     5 |
-- |  6 | Moby Dick             |        1 |          4 |  4 |    10 |
-- |  3 | 100 Years of Solitude |        0 |          5 |  5 |    15 |
-- +----+-----------------------+----------+------------+----+-------+


SELECT
  favorite_books.book_name AS name, book_prices.price AS price
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id;

-- +-----------------------+-------+
-- | name                  | price |
-- +-----------------------+-------+
-- | The Great Gatsby      |     1 |
-- | Things Fall Apart     |     1 |
-- | Decameron             |     1 |
-- | Crime and Punishment  |     2 |
-- | Huckleberry Finn      |     5 |
-- | Moby Dick             |    10 |
-- | 100 Years of Solitude |    15 |
-- +-----------------------+-------+


SELECT
  favorite_books.book_name AS name, book_prices.price AS price, favorite_books.in_stock AS in_stock
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id;

-- +-----------------------+-------+----------+
-- | name                  | price | in_stock |
-- +-----------------------+-------+----------+
-- | The Great Gatsby      |     1 |        1 |
-- | Things Fall Apart     |     1 |        0 |
-- | Decameron             |     1 |        0 |
-- | Crime and Punishment  |     2 |        1 |
-- | Huckleberry Finn      |     5 |        1 |
-- | Moby Dick             |    10 |        1 |
-- | 100 Years of Solitude |    15 |        0 |
-- +-----------------------+-------+----------+

SELECT favorite_books.book_name AS book_name, book_prices.price as price, AVG(book_prices.price) AS avg
FROM favorite_books INNER JOIN book_prices
ON favorite_books.book_price = book_prices.id
GROUP BY favorite_books.book_name;


-- +-----------------------+-------+---------+
-- | book_name             | price | avg     |
-- +-----------------------+-------+---------+
-- | The Great Gatsby      |     1 |  1.0000 |
-- | Things Fall Apart     |     1 |  1.0000 |
-- | Decameron             |     1 |  1.0000 |
-- | Crime and Punishment  |     2 |  2.0000 |
-- | Huckleberry Finn      |     5 |  5.0000 |
-- | Moby Dick             |    10 | 10.0000 |
-- | Twilight              |    10 | 15.0000 |
-- | 100 Years of Solitude |    15 | 15.0000 |
-- +-----------------------+-------+---------+

SELECT favorite_books.book_name AS book_name
FROM favorite_books INNER JOIN book_prices
ON favorite_books.book_price = book_prices.id
GROUP BY favorite_books.book_name;

-- +-----------------------+
-- | book_name             |
-- +-----------------------+
-- | The Great Gatsby      |
-- | Things Fall Apart     |
-- | Decameron             |
-- | Crime and Punishment  |
-- | Huckleberry Finn      |
-- | Moby Dick             |
-- | Twilight              |
-- | 100 Years of Solitude |
-- +-----------------------+

SELECT favorite_books.book_name AS book_name, count(*) AS count
FROM favorite_books INNER JOIN book_prices
ON favorite_books.book_price = book_prices.id
GROUP BY favorite_books.book_name;

-- +-----------------------+-------+
-- | book_name             | count |
-- +-----------------------+-------+
-- | The Great Gatsby      |     1 |
-- | Things Fall Apart     |     1 |
-- | Decameron             |     1 |
-- | Crime and Punishment  |     1 |
-- | Huckleberry Finn      |     1 |
-- | Moby Dick             |     1 |
-- | Twilight              |     2 |
-- | 100 Years of Solitude |     1 |
-- +-----------------------+-------+

SELECT
  favorite_books.book_name AS name, book_prices.price AS price
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id
WHERE favorite_books.in_stock = true;

-- +----------------------+-------+
-- | name                 | price |
-- +----------------------+-------+
-- | The Great Gatsby     |     1 |
-- | Huckleberry Finn     |     5 |
-- | Crime and Punishment |     2 |
-- | Moby Dick            |    10 |
-- +----------------------+-------+



SELECT
  favorite_books.book_name AS name, book_prices.price AS price
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id
WHERE favorite_books.book_name = "Twilight" AND favorite_books.in_stock = true;

-- nothing


SELECT
  favorite_books.book_name AS name, book_prices.price AS price
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id
WHERE favorite_books.book_name = "Twilight";

-- +----------+-------+
-- | name     | price |
-- +----------+-------+
-- | Twilight |    20 |
-- | Twilight |    10 |
-- +----------+-------+

SELECT
  favorite_books.book_name AS name, book_prices.price AS price
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id
WHERE favorite_books.book_name = "The Great Gatsby";

-- +------------------+-------+
-- | name             | price |
-- +------------------+-------+
-- | The Great Gatsby |     1 |
-- +------------------+-------+

SELECT
  favorite_books.book_name AS name, book_prices.price AS price
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id
WHERE book_prices.price < 5;

-- +----------------------+-------+
-- | name                 | price |
-- +----------------------+-------+
-- | The Great Gatsby     |     1 |
-- | Things Fall Apart    |     1 |
-- | Decameron            |     1 |
-- | Crime and Punishment |     2 |
-- +----------------------+-------+

SELECT
  favorite_books.book_name AS name, book_prices.price AS price
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id
WHERE book_prices.price <= 5;

-- +----------------------+-------+
-- | name                 | price |
-- +----------------------+-------+
-- | The Great Gatsby     |     1 |
-- | Things Fall Apart    |     1 |
-- | Decameron            |     1 |
-- | Crime and Punishment |     2 |
-- | Huckleberry Finn     |     5 |
-- +----------------------+-------+

SELECT
  favorite_books.book_name AS name, book_prices.price AS price
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id
WHERE book_prices.price <= 5 AND book_prices.price <> 2;

-- +-------------------+-------+
-- | name              | price |
-- +-------------------+-------+
-- | The Great Gatsby  |     1 |
-- | Things Fall Apart |     1 |
-- | Decameron         |     1 |
-- | Huckleberry Finn  |     5 |
-- +-------------------+-------+



-- CREATE TABLE book_prices (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   -- price INT NOT NULL
--   price DECIMAL(5,3) NOT NULL
-- );

-- CREATE TABLE favorite_books (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   book_name VARCHAR(30) NOT NULL,
--   in_stock BOOLEAN,
--   book_price INT,
--   FOREIGN KEY (book_price)
--   REFERENCES book_prices(id)
--   ON DELETE SET NULL
-- );


-- ************ Another Example ************

DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;
USE books_db;

CREATE TABLE authors(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  PRIMARY KEY (id)
);


CREATE TABLE books(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  title VARCHAR(100),
  authors_id  INT,
  PRIMARY KEY (id),
  FOREIGN KEY (authors_id)
  REFERENCES authors(id)
);


INSERT INTO authors (firstName, lastName) values ('Jane', 'Austen');
INSERT INTO authors (firstName, lastName) values ('Mark', 'Twain');
INSERT INTO authors (firstName, lastName) values ('Lewis', 'Carroll');
INSERT INTO authors (firstName, lastName) values ('Andre', 'Asselin');

INSERT INTO books (title, authors_id) values ('Pride and Prejudice', 1);
INSERT INTO books (title, authors_id) values ('Emma', 1);
INSERT INTO books (title, authors_id) values ('The Adventures of Tom Sawyer', 2);
INSERT INTO books (title, authors_id) values ('Adventures of Huckleberry Finn', 2);
INSERT INTO books (title, authors_id) values ('Alice''s Adventures in Wonderland', 3);
INSERT INTO books (title, authors_id) values ('Dracula', null);

SELECT * FROM authors;
-- +----+-----------+----------+
-- | id | firstName | lastName |
-- +----+-----------+----------+
-- |  1 | Jane      | Austen   |
-- |  2 | Mark      | Twain    |
-- |  3 | Lewis     | Carroll  |
-- |  4 | Andre     | Asselin  |
-- +----+-----------+----------+

SELECT * FROM books;

-- +----+----------------------------------+------------+
-- | id | title                            | authors_id |
-- +----+----------------------------------+------------+
-- |  1 | Pride and Prejudice              |          1 |
-- |  2 | Emma                             |          1 |
-- |  3 | The Adventures of Tom Sawyer     |          2 |
-- |  4 | Adventures of Huckleberry Finn   |          2 |
-- |  5 | Alice's Adventures in Wonderland |          3 |
-- |  6 | Dracula                          |       NULL |
-- +----+----------------------------------+------------+


-- show ALL books with authors
-- INNER JOIN will only return all matching values from both tables
SELECT title, firstName, lastName
FROM books
INNER JOIN authors ON books.authors_Id = authors.id;

-- +----------------------------------+-----------+----------+
-- | title                            | firstName | lastName |
-- +----------------------------------+-----------+----------+
-- | Pride and Prejudice              | Jane      | Austen   |
-- | Emma                             | Jane      | Austen   |
-- | The Adventures of Tom Sawyer     | Mark      | Twain    |
-- | Adventures of Huckleberry Finn   | Mark      | Twain    |
-- | Alice's Adventures in Wonderland | Lewis     | Carroll  |
-- +----------------------------------+-----------+----------+

-- SELECT title, firstName, lastName
-- FROM books
-- INNER JOIN authors ON books.authors_Id = authors.id
-- WHERE authors.firstName = "Jane";

-- show ALL books, even if we don't know the author
-- LEFT JOIN returns all of the values from the left table, and the matching ones from the right table
SELECT title, firstName, lastName
FROM books
LEFT JOIN authors ON books.authors_Id = authors.id;


-- +----------------------------------+-----------+----------+
-- | title                            | firstName | lastName |
-- +----------------------------------+-----------+----------+
-- | Pride and Prejudice              | Jane      | Austen   |
-- | Emma                             | Jane      | Austen   |
-- | The Adventures of Tom Sawyer     | Mark      | Twain    |
-- | Adventures of Huckleberry Finn   | Mark      | Twain    |
-- | Alice's Adventures in Wonderland | Lewis     | Carroll  |
-- | Dracula                          | NULL      | NULL     |
-- +----------------------------------+-----------+----------+

-- show ALL books, even if we don't know the author
-- RIGHT JOIN returns all of the values from the right table, and the matching ones from the left table
SELECT title, firstName, lastName
FROM books
RIGHT JOIN authors ON books.authors_Id = authors.id;

-- +----------------------------------+-----------+----------+
-- | title                            | firstName | lastName |
-- +----------------------------------+-----------+----------+
-- | Pride and Prejudice              | Jane      | Austen   |
-- | Emma                             | Jane      | Austen   |
-- | The Adventures of Tom Sawyer     | Mark      | Twain    |
-- | Adventures of Huckleberry Finn   | Mark      | Twain    |
-- | Alice's Adventures in Wonderland | Lewis     | Carroll  |
-- | NULL                             | Andre     | Asselin  |
-- +----------------------------------+-----------+----------+

