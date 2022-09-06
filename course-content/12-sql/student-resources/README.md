# Student Resources

<hr>

[Return to MySQL](../README.md)

<hr>

<img src="../../00-admin-resources/assets/images/mysql.jpg" width="100">

### Table of Contents

### Terminology & Links

01. [Callbacks](#callbacks)
02. [SQL](#sql)
03. [SQL Install Guides](#sql-install-guides)

This week, you’ll add the final layer to your tech stack: the database. Storing and retrieving data quickly and efficiently makes databases the foundation of full-stack web applications. In this unit, you’ll learn to design a MySQL database capable of storing large amounts of data as well as the tools needed to create, read, update and delete data. You will also learn to connect your MySQL database to a Node.js application using an Express.js server. 

<hr>


## Callbacks

[Back to top](#student-resources)

>In computer programming, a callback is a reference to executable code, or a piece of executable code, that is passed as an argument to other code. This allows a lower-level software layer to call a subroutine (or function) defined in a higher-level layer.


>You receive a package in the mail. While this package may possibly include some data, the most important piece of this package is that it includes an envelope addressed back to the package's sender (postage paid for of course!) You may use some data in the package, or generate some of your own, but you for sure have a way of recontacting (calling back!..) your original sender.

* [understanding callbacks](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
* [what are callbacks](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)
* [jquery callbacks](https://www.w3schools.com/Jquery/jquery_callback.asp)
* [asynchronous javascript](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee)
* [callback hell](http://callbackhell.com/)
* [callbacks explaied](https://medium.freecodecamp.org/javascript-callbacks-explained-using-minions-da272f4d9bcd)
* [callback tutorial](http://www.learn-js.org/en/Callbacks)
* [passing parameters to callbacks](https://stackoverflow.com/questions/3458553/javascript-passing-parameters-to-a-callback-function?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)
* [Alternative ways to pass a callback to a function in Javascript](https://gist.github.com/ytiurin/7e5f57809e3e6eeac616)
* [passing arguments to callback](https://www.jstips.co/en/javascript/passing-arguments-to-callback-functions/)
* [callback functions explained](https://wsvincent.com/javascript-callback-functions-explained/)
* [Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
* [Declaring and Using Callbacks](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/Using_js-ctypes/Declaring_and_Using_Callbacks)
* [callbacks in components](https://developer.mozilla.org/en-US/docs/Mozilla/Creating_JavaScript_callbacks_in_components)
* [Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
* [what are callback functions](https://docs.nodejitsu.com/articles/getting-started/control-flow/what-are-callbacks/)
* [what is callback](https://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm)
* [callback example](https://stackoverflow.com/questions/19739755/nodejs-callbacks-simple-example?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)
* [avoiding callback hell](https://blog.risingstack.com/node-js-async-best-practices-avoiding-callback-hell-node-js-at-scale/)
* [callbacks for beginners](http://www.theprojectspot.com/tutorial-post/nodejs-for-beginners-callbacks/4)
* [call back tutorial video](https://www.youtube.com/watch?v=ui4-OADfgIk)
* [interact with a database using callbacks](https://dzone.com/articles/how-to-interact-with-a-database-using-callbacks-in)
* [master callbacks](https://www.youtube.com/watch?v=qN0dkXj7jc0)
* [video tutorial](https://www.youtube.com/watch?v=pTbSfCT42_M)
* [callbacks usig real life analogy](https://codeburst.io/javascript-promises-explained-with-simple-real-life-analogies-dd6908092138)
* [callbacks in plain english](https://stackoverflow.com/questions/9596276/how-to-explain-callbacks-in-plain-english-how-are-they-different-from-calling-o?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)
  
## SQL

[Back to top](#student-resources)

Take a look at the text representation of a database.  It looks similar to an Excel spreadsheet, which is a helpful way of visualizing how databases store information.

<table class="table">
  <thead>
    <tr>
      <th>id</th><th>first_name</th><th>last_name</th><th>gender</th><th>email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td><td>Farley</td><td>Kitten</td><td>male</td><td>farley@gmail.com</td>
    </tr>
    <tr>
      <td>2</td><td>Tiger</td><td>Chaw</td><td>male</td><td>tiger@gmail.com</td>
    </tr>
    <tr>
      <td>3</td><td>Snickers</td><td>Meowas-alot</td><td>male</td><td>snickers@yahoo.com</td>
    </tr>
    <tr>
      <td>4</td><td>Kittu</td><td>Doggie</td><td>male</td><td>Kittu@gmail.com</td>
    </tr>
    <tr>
      <td>5</td><td>Sparky</td><td>Doggie</td><td>female</td><td>sparkey@gmail.com</td>
    </tr>
  </tbody>
</table>


Each column (or in DB speak **field**) has a name.  We can describe the structure of this table independently of what data is in it.  We'd write the structure like this:

<pre>
+------------+
| students   |
+------------+
| id         |
| first_name |
| last_name  |
| gender     |
| email      |     
+------------+
</pre>

### Conventions

We can use any field names and table names we want, but there are some conventions that we follow for our own sanity.  These are conventions &mdash; you might see other conventions used elsewhere.

1. Table names are pluralized, e.g., "students," "products," "todos," "favorite_foods," "programming_languages," "people," etc.
2. We use snake_case_like_this to name fields, rather than camelCaseLikeThis &mdash;
3. Fields that involve dates or times end in <code>&#95;at</code> or <code>&#95;on</code> (<code>created&#95;at</code>, <code>updated&#95;at</code>, <code>completed&#95;at</code>, etc.) unless it's really obvious they already refer to something time-related.  We'd say <code>birthday</code> rather than <code>born_on</code>, for example.
4. When in doubt, make your field and table names as self-explanatory as possible.  Avoid field names like <code>type</code>, <code>kind</code>, <code>status</code>, etc.  They could refer to anything!  Err on the side of clarity, even if it seems verbose.  Other coders will appreciate it, and computers don't care if your field name is 20 characters long rather than 5 characters long.

### Primary Keys

Each row in a database table should have a <strong>primary key</strong>.  This is a field (or collection of fields) which uniquely identify that row from all other rows.  Rails defaults to using a <strong>synthetic primary key</strong>, which is just an arbitrary, auto-incrementing integer usually denoted by the field name <code>id</code>.  It's called "synthetic" because it doesn't have any inherent meaning.

The assumption that the primary key is an auto-incrementing integer called <code>id</code> baked deeply into Relational Databases.  


#### SQLite

> http://www.sqlite.org
>
> https://www.sqlite.org/about.html

SQLite is a software library that implements a self-contained, serverless, zero-configuration, transactional SQL database engine. SQLite is the most widely deployed SQL database engine in the world. The source code for SQLite is in the public domain.


#### PostgreSQL

> http://www.postgresql.org
>
> https://www.postgresql.org/about/

PostgreSQL is a powerful, open source object-relational database system. It has more than 15 years of active development and a proven architecture that has earned it a strong reputation for reliability, data integrity, and correctness. It runs on all major operating systems, including Linux, UNIX (AIX, BSD, HP-UX, SGI IRIX, Mac OS X, Solaris, Tru64), and Windows. It is fully ACID compliant, has full support for foreign keys, joins, views, triggers, and stored procedures (in multiple languages). It includes most SQL:2008 data types, including INTEGER, NUMERIC, BOOLEAN, CHAR, VARCHAR, DATE, INTERVAL, and TIMESTAMP. It also supports storage of binary large objects, including pictures, sounds, or video. It has native programming interfaces for C/C++, Java, .Net, Perl, Python, Ruby, Tcl, ODBC, among others, and exceptional documentation.

An enterprise class database, PostgreSQL boasts sophisticated features such as Multi-Version Concurrency Control (MVCC), point in time recovery, tablespaces, asynchronous replication, nested transactions (savepoints), online/hot backups, a sophisticated query planner/optimizer, and write ahead logging for fault tolerance. It supports international character sets, multibyte character encodings, Unicode, and it is locale-aware for sorting, case-sensitivity, and formatting. It is highly scalable both in the sheer quantity of data it can manage and in the number of concurrent users it can accommodate. There are active PostgreSQL systems in production environments that manage in excess of 4 terabytes of data.

> PostgreSQL has won praise from its users and industry recognition, including the Linux New Media Award for Best Database System and five time winner of the The Linux Journal Editors' Choice Award for best DBMS.
-----------------------------------------
**C.R.U.D**<br>
create: `INSERT`<br>
retrieve / read: `SELECT`<br>
update: `UPDATE`<br>
delete / destroy: `DELETE`

```sql

--------------------------------------
-- CREATE the TABLE attendees
--------------------------------------

CREATE TABLE attendees (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "first_name" which cannot contain null --
  first_name VARCHAR(30) NOT NULL,
  -- Makes a string column called "first_name" which cannot contain null --
  last_name VARCHAR(30) NOT NULL,
  -- Makes a string column called "first_name" which cannot contain null --
  gender VARCHAR(6) NOT NULL CHECK (Gender IN ('male', 'female', 'other'))

  email VARCHAR(30),
  -- Makes a sting column called "pet_name" --
  PRIMARY KEY (id)
);
--------------------------------------
-- asking questions using INSERT
--------------------------------------

-- can i add an attendee to the attendees table?
INSERT INTO attendees
(first_name, last_name, gender, email)
VALUES
('jane', 'smith', 'female','abc@hi.com')

-- can i add an attendee with no email?
INSERT INTO attendees
(first_name, last_name, gender)
VALUES
('jane', 'smith', 'female')

-- can i change the order of the columns in my insert statement?
INSERT INTO attendees
(gender, first_name, last_name, email)
VALUES
('female', 'jane', 'smith', 'abc@biz.com')


--------------------------------------
-- asking questions using SELECT
--------------------------------------

-- can i get a list of the women in this table?
SELECT *
FROM attendees
WHERE gender = 'female'

-- can i get a list of the men ...?
SELECT *
FROM attendees
WHERE gender = 'male'

-- can i get a list of the other ...?
SELECT *
FROM attendees
WHERE gender = 'other'

-- can i get a list of attendees whose last name starts with the letter 'S'?
SELECT *
FROM attendees
WHERE last_name LIKE 'S%'

-- can i get a sorted list of attendees with emails ending in .biz?
SELECT *
FROM attendees
WHERE email LIKE '%biz'
ORDER BY last_name, first_name


--------------------------------------
-- changing data using UPDATE
--------------------------------------

-- can i change the email address of an attendee if i know their id?
UPDATE attendees
SET email = '123@abc.com'
WHERE id = 1

-- can i change the email address of an attendee without their id?
UPDATE attendees
SET email = '123@abc.com'
WHERE email = 'abc@biz.com'

-- can i change the email address of several attendees at once?
UPDATE attendees
SET email = '123@abc.com'
WHERE last_name LIKE 'S%'


--------------------------------------
-- deleting data using DELETE
--------------------------------------

-- can i delete an attendee record if i know their id?
DELETE from attendees
WHERE id = 1

-- can i delete an attendee record without their id?
DELETE from attendees
WHERE email = '123@abc.com'

-- can i delete everything from the table?
DELETE from attendees
WHERE 1 = 1

```
SQL Server: ALTER TABLE Statement
This SQL Server tutorial explains how to use the ALTER TABLE statement in SQL Server (Transact-SQL) to add a column, modify a column, drop a column, rename a column or rename a table with syntax and examples.
> https://www.techonthenet.com/sql_server/tables/alter_table.php

```sql
ALTER TABLE table_name
  ADD column_name column-definition;
```

**Example**

Let's look at an example that shows how to add a column in an SQL Server table using the ALTER TABLE statement.

For example:

```sql
ALTER TABLE attendees
  ADD has_pet BOOLEAN NOT NULL;
```

```sql
ALTER TABLE attendees
  ADD pet_age INTEGER(10);
```

```sql
ALTER TABLE attendees
  ADD pet_name VARCHAR(30);
```

**Add multiple columns in table**

You can use the ALTER TABLE statement in SQL Server to add multiple columns to a table.

```sql
ALTER TABLE table_name
  ADD column_1 column-definition,
      column_2 column-definition,
      ...
      column_n column_definition;
```
For example:

```sql
ALTER TABLE attendees
  ADD city VARCHAR(50),
      state VARCHAR(40);

```
**Modify column in table**

```sql

ALTER TABLE table_name
  ALTER COLUMN column_name column_type;

```

```sql
ALTER TABLE attendees
  ALTER COLUMN last_name VARCHAR(75) NOT NULL;

```

**Drop column in table**

You can use the ALTER TABLE statement in SQL Server to drop a column in a table.


```sql

ALTER TABLE table_name
  DROP COLUMN column_name;

```

Example

```sql


ALTER TABLE attendees
  DROP COLUMN last_name;
```

**Rename column in table**
You can not use the ALTER TABLE statement in SQL Server to rename a column in a table. However, you can use sp_rename, though Microsoft recommends that you drop and recreate the table so that scripts and stored procedures are not broken.

```sql
sp_rename 'table_name.old_column_name', 'new_column_name', 'COLUMN';

```

Example

```sql
sp_rename 'attendees.last_name', 'lname', 'COLUMN';

```

**Rename table**

```sql
sp_rename 'old_table_name', 'new_table_name';
```

Example

```sql
sp_rename 'attendees', 'students';

```

## SQL Install Guides

* [MySQL Install Mac](./Install_Guides/mysql-mac-guide.md)
* [MySQL Install Mac](./Install_Guides/mysql-windows-guide.md)

## Key Topics

The following topics will be covered in this unit:

* [MySQL Shell](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-getting-started.html)

* [Creating and selecting a database](https://dev.mysql.com/doc/refman/8.0/en/creating-database.html)

* [Creating tables](https://dev.mysql.com/doc/refman/8.0/en/creating-tables.html)

* [SELECT statement](https://dev.mysql.com/doc/refman/8.0/en/select.html)

* [INSERT statement](https://dev.mysql.com/doc/refman/8.0/en/insert.html)

* [UPDATE statement](https://dev.mysql.com/doc/refman/8.0/en/update.html)

* [DELETE statement](https://dev.mysql.com/doc/refman/8.0/en/delete.html)

* [Connecting MySQL to Node.js app using mysql2](https://www.npmjs.com/package/mysql2)

* [Data types](https://dev.mysql.com/doc/refman/8.0/en/data-types.html)

* [Schemas](https://docs.oracle.com/cd/B19306_01/server.102/b14220/schema.htm)

* [Seeds](https://dev.mysql.com/doc/refman/8.0/en/loading-tables.html)

* [Primary keys](https://dev.mysql.com/doc/refman/8.0/en/constraint-primary-key.html)

* [Foreign keys](https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html)

* [Prepared statements](https://dev.mysql.com/doc/refman/8.0/en/sql-prepared-statements.html)

* [Aggregate functions](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html)

* [Joins](https://dev.mysql.com/doc/refman/8.0/en/join.html)

## Learning Objectives

You will be employer-ready if you are able to:

* Use MySQL Shell to execute commands.

* Create a database schema.

* Seed a database for use in application development.

* Perform CRUD functions using MySQL commands.

* Specify the relationship between tables using primary and foreign keys.

* Write a SQL query that joins two tables together.

* Implement `?` prepared statements in conjunction with `INSERT`, `UPDATE`, and `DELETE`

* Perform a calculation on a set of values using aggregate functions.

## Technical Interview Preparation

You will be employer-competitive if you are able to solve the following algorithms and successfully complete the assessments.

### Algorithms

Practicing algorithm-based interview questions is one of the best ways to prepare for interviews. Watch the `📹 Let's Code` video(s) for tips and tricks on how to solve the algorithm.

* [01: Multiply Into 20](./03-Algorithms/01-multiply-into-20)

  * 📹 [Let's Code Multiply Into 20!](https://2u-20.wistia.com/medias/joflnt5aqv)

* [02: Zeroes and Ones](./03-Algorithms/02-zeroes-and-ones)

* [03: Merge Sorted](./03-Algorithms/03-merge-sorted)

### Assessments

Assess your knowledge by answering technical interview questions and solving coding challenges.

* [12-SQL Technical Interview Questions](https://forms.gle/iURNKwybewENCnS76)

## Homework

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. Your assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL2.

## Career Connection

Career Services material for this unit is located in the [Career Connection folder](./04-Career-Connection/README.md). For more information about Career Services, including coding milestones, demo days, technical toolkits, workshops, and additional resources, visit the [Career Services website](https://mycareerspot.org/).

## Heads-Up

In the next unit, you will learn to use Sequelize, an object-relational mapping (ORM) library, to simplify your MySQL queries and easily handle data in a full-stack app.

## Resources

Here are some additional resources to help solidify the topics covered in this unit.

### Git Guide

Refer to the Git Guide to review the Git concept for this unit. Watch the `📹 Git Guide` video for an additional walkthrough of the Git concept.

  * 📖 [Git Guide: Git Cherry-Pick](./01-Activities/27-Evr_Git-Cherry-Picking/README.md) 

  * 📹 [Git Guide Video: Git Cherry-Pick](https://2u-20.wistia.com/medias/wkipdjl81o)

### Full-Stack Blog Posts

Check out the [Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/) for additional resources, like walkthroughs, articles, and installation guides.

  * 📖 Blog Post: [MySQL Installation Guide](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide)

  * 📖 Blog Post: [MySQL Reference Guide](https://coding-boot-camp.github.io/full-stack/mysql/mysql-reference-guide)

  * 📖 Blog Post: [Deploy with Heroku and MySQL](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql)

### General

Refer to these resources for additional information about topics covered in this unit.

  * 📖 [MySQL documentation on getting started](https://dev.mysql.com/doc/mysql-getting-started/en/)
  
  * 📖 [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2)
 
---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
