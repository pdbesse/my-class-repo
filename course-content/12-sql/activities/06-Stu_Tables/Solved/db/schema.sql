DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;

-- Use the books_db --
USE books_db;

-- Creates the table "biographies" within books_db --
CREATE TABLE biographies (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(100)
);

-- USE example_db;

CREATE TABLE cats (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT,
  -- id INT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(100)
);


-- mysql -u root -p
-- source schema.sql
-- SHOW tables;
-- SHOW COLUMNS FROM biographies FROM books_db;
-- SHOW COLUMNS FROM books_db.biographies;