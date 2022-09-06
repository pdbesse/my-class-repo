DROP DATABASE IF EXISTS library_db;
CREATE DATABASE library_db;
USE library_db;

CREATE TABLE books(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  title VARCHAR(100),
  PRIMARY KEY (id)
);

INSERT INTO books (title) values ('Pride and Prejudice');
INSERT INTO books (title) values ('Emma');
INSERT INTO books (title) values ('The Adventures of Tom Sawyer');
INSERT INTO books (title) values ('Adventures of Huckleberry Finn');
INSERT INTO books (title) values ('Alice''s Adventures in Wonderland');
INSERT INTO books (title) values ('Dracula');

SELECT * FROM books;

CREATE TABLE authors(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  PRIMARY KEY (id)
);


INSERT INTO authors (firstName, lastName) values ('Jane', 'Austen');
INSERT INTO authors (firstName, lastName) values ('Mark', 'Twain');
INSERT INTO authors (firstName, lastName) values ('Lewis', 'Carroll');
INSERT INTO authors (firstName, lastName) values ('Andre', 'Asselin');

SELECT * FROM authors;


