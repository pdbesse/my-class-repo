DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;

USE grocery_db;

CREATE TABLE products(
  id INT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  category_name VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  in_stock BOOLEAN
);

CREATE TABLE categories(
  id INT NOT NULL,
  category_name VARCHAR(30) NOT NULL
);

SELECT * FROM products;
SELECT * FROM categories;

SELECT * FROM products WHERE category_name = "produce";
SELECT * FROM products WHERE category_name = "produce" LIMIT 1;



DROP DATABASE IF EXISTS demo_db;
CREATE DATABASE demo_db;

USE demo_db;

CREATE TABLE user(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  location VARCHAR(100) NOT NULL,
  age INT NOT NULL,
  happy BOOLEAN
);

CREATE TABLE pet(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);
