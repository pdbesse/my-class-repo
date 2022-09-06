# Datasets 

Imagine that, on the job, we want to know the first and last names of all employees born in March. To answer this question, we have to find a way to query a database that contains thousands of records to get the results that we need -- and only those results.

### We start by opening MySQL Shell:

```mysql
mysql -u root -p

```


### Next, we import the schema and check that the employees database is in use:

```mysql
SOURCE employees.sql;
SELECT DATABASE();
```

Now let's look at the tables to determine which table is likely to hold the data we need. We use the SHOW command to display the tables, then the DESCRIBE command to display the columns used in the employees table:

```mysql
SHOW TABLES;
DESCRIBE employees;
```

The employees table has a column for birth_date (with a data type of DATE), as well as columns for both the employee's first and last name. Querying this table should get us answers.

We start writing the query by using SELECT to select the columns we want to use from the table. Because we need the names of the employees, we include the first_name and last_name columns as well as the birth_date column:

#### Building a Query
```mysql
SELECT first_name, last_name, birth_date FROM employees WHERE MONTH(birth_date) = 3 Limit 25;
```

`SELECT first_name, last_name, birth_date FROM employees`


Next, we add a WHERE clause to include only the employees who have a birthday in March. The DATE data type includes a handy MONTH() method that makes it easy to select by month:
[MySQL Date - Month Function](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_month)

`WHERE MONTH(birth_date) = 3`


Because this is a big company, thousands of employees might have a birthday in March. So before we test whether the query gets us the answers we need, we will want to limit the results to just a small sample. We can do that by using LIMIT:


`LIMIT 25;`

When we enter the test query into MySQL Shell, it returns the information we need -- a list of the first and last names of 25 employees born in March. Now we can remove the limit, to return a list that includes all employees with a birthday in March:

```mysql
SELECT first_name, last_name, birth_date FROM employees WHERE MONTH(birth_date) = 3 Limit 25;
```

SQL developers must frequently answer questions -- both mundane and complex -- with data. During today's class, we will focus on ways to access large amounts of data to answer such questions. Then we will apply these skills by building and querying a database.


```mysql

```