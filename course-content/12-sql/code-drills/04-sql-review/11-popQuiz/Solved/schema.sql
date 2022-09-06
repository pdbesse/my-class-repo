/* Schema for SQL database/table. We haven't discussed this type of file yet */
DROP DATABASE IF EXISTS sanFrancisco;

/* Create database */
CREATE DATABASE sanFrancisco;
USE sanFrancisco;

/* Create new table with a primary key that auto-increments, and a text field */
CREATE TABLE colleges (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

/* Seeds for SQL table. We haven't discussed this type of file yet */
USE sanFrancisco;

/* Insert 3 Rows into your new table */
INSERT INTO colleges (name)
VALUES ("UCBerkeley");

INSERT INTO colleges (name)
VALUES ("UCSF");

INSERT INTO colleges (name)
VALUES ("City College");

/* OR */
INSERT INTO colleges (name)
VALUES ("Academy of Art University"), ("Golden State Univeristy"), ("San Francisco Art Institute");


