DROP DATABASE IF EXISTS inventory_db;
-- Creates the "inventory_db" database --
CREATE DATABASE inventory_db;

-- Makes it so all of the following code will affect inventory_db --
USE inventory_db;

-- Creates the table "produce" within inventory_db --
CREATE TABLE produce (
  -- Creates a numeric column called "id" --
  id INT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(100) NOT NULL
);

-- mysql -u root -p
-- source schema.sql


-- Database Naming Conventions
-- Name can be singular or plural but as the database represents a single database it should be singular.


-- Table Naming Conventions
-- Using lowercase will help speed typing, avoid mistakes as MYSQL is case sensitive.
-- Space replaced with Underscore — Using space between words is not advised.
-- Numbers are not for names — While naming, it is essential that it contains only Alpha English alphabets.
-- Valid Names — Names should be a descriptive of the elements. i.e. — Self-explanatory and not more than 64 characters.
-- No prefixes allowed.

