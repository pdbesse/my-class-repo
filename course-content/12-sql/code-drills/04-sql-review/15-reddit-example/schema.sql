-- DROP DATABASE IF EXISTS
DROP DATABASE IF EXISTS SUBREDDIT_DB;
-- CREATE DATABASE 
CREATE DATABASE SUBREDDIT_DB;
-- USE DATABASE; 
USE SUBREDDIT_DB;

-- *************************** CREATE QUERIES ***********************

-- CREATE TABLE SUBREDDIT 
CREATE TABLE SUBREDDIT(
   ID INTEGER(11) AUTO_INCREMENT NOT NULL,
   NAME VARCHAR(100),
   PRIMARY KEY (ID)
);

-- CREATE TABLE USER
-- One to Many: A User has many Post
-- One to Many: A User has many Votes
-- One to Many: A User has many Comments
CREATE TABLE USER(
  ID INTEGER(11) AUTO_INCREMENT NOT NULL,
  NAME VARCHAR(100),
  AGE INTEGER(11),
  EMAIL VARCHAR(100),
  PRIMARY KEY (ID)
); 

-- CREATE TABLE POST
-- One to Many: A Post belongs to A User
-- One to Many: A Post belongs to a SUB
CREATE TABLE POST(
  ID INTEGER(11) AUTO_INCREMENT NOT NULL,
  TITLE VARCHAR(100),
  TEXT VARCHAR(100),
  PRIMARY KEY (ID),
  -- FOREIGN KEY CONSTAINTS
  SUBID INTEGER(11) NOT NULL,
  USERID INTEGER(11) NOT NULL,
  -- https://www.w3schools.com/sql/sql_foreignkey.asp
  -- https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html
  -- A foreign key relationship involves a parent table that holds the initial column values, and a child table with column values that reference the parent column values. 
  -- A foreign key constraint is defined on the child table.
  FOREIGN KEY (SUBID) REFERENCES SUBREDDIT(ID),
  FOREIGN KEY (USERID) REFERENCES USER(ID)
); 

-- CREATE TABLE VOTE
-- One to Many: A Vote belongs to a Post
-- One to Many: A Vote belongs to a User
CREATE TABLE VOTE(
  ID INTEGER(11) AUTO_INCREMENT NOT NULL,
  VALUE VARCHAR(100),
  PRIMARY KEY (id),
  -- FOREIGN KEY CONSTAINTS
  POSTID INTEGER(11) NOT NULL,
  USERID INTEGER(11) NOT NULL,
  FOREIGN KEY (POSTID) REFERENCES POST(ID),
  FOREIGN KEY (USERID) REFERENCES USER(ID)
); 

-- CREATE TABLE COMMENTS
-- One to Many: A Comment belongs to a Post
-- One to Many: A Comment belongs to a User
CREATE TABLE COMMENT(
  ID INTEGER(11) AUTO_INCREMENT NOT NULL,
  VALUE VARCHAR(100),
  PRIMARY KEY (id),
  -- FOREIGN KEY CONSTAINTS
  POSTID INTEGER(11) NOT NULL,
  USERID INTEGER(11) NOT NULL,
  FOREIGN KEY (POSTID) REFERENCES POST(ID),
  FOREIGN KEY (USERID) REFERENCES USER(ID)
); 