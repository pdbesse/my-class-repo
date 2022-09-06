DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

USE registrar_db;

DROP TABLE IF EXISTS courses;
CREATE TABLE courses (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  course_title VARCHAR(30) DEFAULT 'Web Dev' NOT NULL,
  course_description TEXT NOT NULL,
  active BOOLEAN DEFAULT true NOT NULL,
  date_added DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

DROP TABLE IF EXISTS students;
CREATE TABLE students (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  active BOOLEAN NOT NULL,
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

DROP TABLE IF EXISTS instructors;
CREATE TABLE instructors (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  active BOOLEAN NOT NULL,
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

DROP TABLE IF EXISTS classrooms;
CREATE TABLE classrooms (
  id INT NOT NULL,
  building_name VARCHAR(30) NOT NULL,
  room_number INT NOT NULL,
  available BOOLEAN NOT NULL,
  date_updated DATETIME NOT NULL
);

-- SHOW DATABASES;
-- USE registrar_db;
-- SHOW TABLES;
-- DESCRIBE courses;
-- DESCRIBE students;
-- SHOW COLUMNS FROM students FROM registrar_db;
-- SHOW COLUMNS FROM registrar_db.students;
-- SHOW COLUMNS FROM students;
