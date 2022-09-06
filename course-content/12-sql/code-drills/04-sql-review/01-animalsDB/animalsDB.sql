-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS animals_db;
-- Creates the "animals_db" database --
CREATE DATABASE animals_db;

-- Makes it so all of the following code will affect animals_db --
USE animals_db;

-- Creates the table "people" within animals_db --
CREATE TABLE people (
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  has_pet BOOLEAN NOT NULL,
  -- Makes a sting column called "pet_name" --
  pet_name VARCHAR(30),
  -- Makes an numeric column called "pet_age" --
  pet_age INTEGER(10)
);

-- Creates new rows containing data in all named columns --
INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Jerome", true, "Farley", 5);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Alvin", true, "Chip", 25);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Simon",true,"Dale",23);

INSERT INTO people (name, has_pet)
VALUES ("Theodore", false);

-- Updates the row where the column name is peter --
UPDATE people
SET has_pet = true, pet_name = "Fluffy McFluff Fluff", pet_age = 2
WHERE name = "Theodore";




SELECT * FROM people;
