# Student Resources :computer:

<hr>

[Return to NoSQL](../README.md)

<hr>

<img src="../../00-admin-resources/assets/images/mongodb.jpg" height="60">

### Table of Contents

### Terminology & Links

01. [MongoDB](#MongoDB)
02. [Sharding](#sharding)

### Installation Resources
01. [Installing](#installing-mongodb-on-your-machine)

<hr>

## MongoDB

[Back to top](#student-resources)

## Overview

In this unit, you will learn about NoSQL databases and perform CRUD operations using MongoDB, a popular NoSQL, document-based database. You will also learn to use Mongoose, an Object Data Modeling (ODM) library with your underlying MongoDB database to enforce a specific schema and handle data relationships. Deployment of an application using Mongo Atlas and Heroku is also covered.

## Key Topics

The following topics will be covered in this unit:

* [Visually Exploring Data with MongoDB Compass](https://docs.mongodb.com/compass/master/)

* [MongoDB Databases and Collections](https://docs.mongodb.com/manual/core/databases-and-collections/)

* [MongoDB CRUD Operations](https://docs.mongodb.com/manual/crud/)

* [MongoDB Embedded Documents](https://docs.mongodb.com/manual/core/data-model-design/#std-label-data-modeling-embedding)

* [MongoDB Cursor Methods](https://docs.mongodb.com/manual/reference/method/js-cursor/)

* [Mongoose Models and Schemas](https://mongoosejs.com/docs/guide.html)

* [Mongoose CRUD Operations](https://mongoosejs.com/docs/queries.html)

* [Mongoose Instance Methods](https://mongoosejs.com/docs/guide.html#methods)

* [Mongoose Subdocuments](https://mongoosejs.com/docs/subdocs.html)

* [Mongoose Aggregate](https://mongoosejs.com/docs/api/aggregate.html#aggregate_Aggregate)

* [Mongoose Virtuals](https://mongoosejs.com/docs/tutorials/virtuals.html)

* [Mongoose Populate](https://mongoosejs.com/docs/populate.html)

* [Mongoose Subdocuments CRUD Operations](https://mongoosejs.com/docs/subdocs.html#finding-a-subdocument)

## Learning Objectives

You will be employer-ready if you are able to:

* Create and manipulate data using MongoDB Compass

* Insert, find, and return documents stored within a MongoDB database

* Update and delete documents stored in MongoDB database

* Explain how embedded documents can be used to create one-to-one and one-to-many relationships

* Limit, sort, and skip documents using MongoDB methods

* Define the structure of the database with a Mongoose schema

* Create a model to map to the MongoDB document and provide functionality

* Execute CRUD queries using Mongoose

* Explain the difference between an instance method and a static method

* Create and manipulate a subdocument

* Access MongoDB's aggregate framework through Mongoose's `aggegrate()` method

* Implement a Mongoose virtual property to create computed properties

* Configure Heroku for deployment of a Node.js application using MongoDB Atlas

### General

Refer to these resources for additional information about topics covered in this unit.

  * 📖 [Understanding the different types of NoSQL databases](https://www.mongodb.com/scale/types-of-nosql-databases)

  * 📖 [MongoDB docs on downloading and installing Compass](https://docs.mongodb.com/compass/current/install/)

  * 📖 [MongoDB docs on getting started](https://docs.mongodb.com/manual/tutorial/getting-started/)

  * 📖 [Mongoose docs on getting started](https://mongoosejs.com/docs/index.html)


* [json-and-bson: binary JSON](https://www.mongodb.com/json-and-bson)
* [what-is-mongodb](https://www.mongodb.com/what-is-mongodb)
* [What is MongoDB? | MongoDB | Video](https://youtu.be/CvIr-2lMLsk)
* [MongoDB In 30 Minutes: t=6m55s](https://youtu.be/pWbMrx5rVBE?t=6m55s)
* [default-mongodb-port](https://docs.mongodb.com/manual/reference/default-mongodb-port/)
* [MongoDBm Lab Heroku Deployment Process](resources/pdf)
* [Default MongoDB Port](https://docs.mongodb.com/manual/reference/default-mongodb-port/)
* [mongojs](https://www.npmjs.com/package/mongojs)

Mongo CRUD
* [MongoDB CRUD Operations](https://docs.mongodb.com/manual/crud/)

Create/Insert
* [insert-documents](https://docs.mongodb.com/manual/tutorial/insert-documents/)
* [insert-methods](https://docs.mongodb.com/manual/reference/insert-methods/)

Read/Query
* [query-documents[(https://docs.mongodb.com/manual/tutorial/query-documents/)

Update
* [update-documents](https://docs.mongodb.com/manual/tutorial/update-documents/)
* [update-methods](https://docs.mongodb.com/manual/reference/update-methods/)

Delete
* [remove-documents](https://docs.mongodb.com/manual/tutorial/remove-documents/)
* [delete-methods](https://docs.mongodb.com/manual/reference/delete-methods/)


* [Difference between scaling horizontally and vertically for databases](https://stackoverflow.com/questions/11707879/difference-between-scaling-horizontally-and-vertically-for-databases)

* [What are the advantages of using a schema-free database like MongoDB compared to a relational database?](https://stackoverflow.com/questions/2117372/what-are-the-advantages-of-using-a-schema-free-database-like-mongodb-compared-to)

* [Why I think Mongo is to Databases what Rails was to Frameworks](http://www.railstips.org/blog/archives/2009/12/18/why-i-think-mongo-is-to-databases-what-rails-was-to-frameworks/)

* [Why Schemaless?](https://www.mongodb.com/blog/post/why-schemaless)

* [Robomongo](https://robomongo.org/download)

* (Cheerio: Fast, flexible, and lean implementation of core jQuery designed specifically for the server.)[https://cheerio.js.org/]

* [Cheerio: Github](https://github.com/cheeriojs/cheerio)

* [".children([selector])"](https://github.com/cheeriojs/cheerio#childrenselector)

* [.sort(sort)](https://docs.mongodb.com/manual/reference/method/cursor.sort/)
>Result Ordering

>Unless you specify the sort() method or use the $near operator, MongoDB does not guarantee the order of query results.

>Ascending/Descending Sort

>Specify in the sort parameter the field or fields to sort by and a value of 1 or -1 to specify an ascending or descending sort respectively.

* [Mongo Set Up](https://www.npmjs.com/package/mongojs)

```Javascript
var mongojs = require('mongojs')
var db = mongojs(connectionString, [collections])
```

The connection string should follow the format described in the mongo connection string docs. Some examples of this could be:

* [morgan](HTTP request logger middleware for node.js)
>Named after [Dexter](http://en.wikipedia.org/wiki/Dexter_Morgan), a show you should not watch until completion.

## [Sharding](https://en.wikipedia.org/wiki/Shard_(database_architecture)) - we do not Shard in Class ;)

[Back to top](#student-resources)

Is a type of database partitioning that separates very large databases the into smaller, faster, more easily managed parts called data shards. The word shard means a small part of a whole.

Horizontal scaling means that you scale by adding more machines into your pool of resources whereas Vertical scaling means that you scale by adding more power (CPU, RAM) to an existing machine.

-----------------------------------------

# Installing MongoDB on your Machine

[Back to top](#student-resources)

### Contents

1. [Installing MongoDB on Windows](#1-installing-mongodb-on-windows)
2. [Installing MongoDB on MacOS](#3-installing-mongodb-on-macos)

-----------------------------------------

## Installing MongoDB On Windows
### Step One: Installing MongoDB on Windows

[back to installing](#installing-mongodb-on-your-machine)

1. Go to the MongoDB download page: <a href="https://www.mongodb.com/download-center#community" target="_blank">MongoDB Download Center</a>

2. Scroll down, go to the green box with the Community Server Tab highlighted.

3. Go to the dropdown menu labeled "Version." Select "Windows 64-bit x64," then click the "DOWNLOAD (msi)" button.

4. The next page will thank you for downloading MongoDB then show a newsletter link. You can ignore this. In a few seconds, your browser will notify you that the file is downloading.

5. Open up Windows Explorer and locate the installation file (it should be in the default directory where your browser stores downloads). Open the file and follow the instructions.

* When the installer prompts you to "Choose Setup Type," click the Complete button, then carry on.

* **DO NOT** Install `Compass` along with your MongoDB install.

* A window might pop up mid-installation, asking you whether you’re sure you want to download a particular component of MongoDB. Click yes, otherwise the install will fail.

-----------------------------------------

## Step Two: Configuring MongoDB on Windows

[back to installing](#installing-mongodb-on-your-machine)

1. **IMPORTANT**: You need to create a data directory for your MongoDB installation, or it won't run. Open Git Bash, then cd your way to the root directory:

2. `cd c:`

3. Run the following command:

4. `mkdir -p data/db`

5. This is the default location for MongoDB’s databases. You need a directory for your databases, or else you MongoDB will refuse to run.

6. You’ll also want to add MongoDB’s path to the PATH environment variable, so that you can run it easily from the bash command line.

7. First, locate the directory where you installed MongoDB. This is likely `C:\\Program Files\\MongoDB\\Server\\<version_number>\\bin`. Copy this directory to your clipboard.

8. Then, open up the System menu or Control Card on your machine, usually accessible via the Start menu or Search Bar in Windows operating systems.

9. Go to Advanced Settings.

* If you are on Windows 10 and opened the Control Panel, click **System and Security**; **System**; and **Advanced System Settings**.

10. When a new window opens up, click the **Environment Variables** button located toward the bottom of the window.

11. An Environment Variables window should open up. Look at the bottom half of this window, a scrollable table called "System Variables." Look at the Variable column and search for the variable called Path. Click on it, then click the "Edit…" button below.

12. The next window will look different depending on your version of Windows. You’ll either be able to press the "New" button and paste your MongoDB directory into the input box that shows up, or you’ll have to paste the directory at the end of a long string of other directories. So it goes.

13. If you would prefer video instructions for this part, watch this:
    [![Youtube Link](http://img.youtube.com/vi/sBdaRlgb4N8/0.jpg)](https://www.youtube.com/watch?v=sBdaRlgb4N8&feature=youtu.be&t=120)

14. Test if it worked: Close your current Git Bash window, then reopen it and run this command: `mongod`

15. **NOTE**: No "b" at the end, simply `mongod`

16. If mongod is still running, great job! Now go ahead and open a new instace of Git Bash, and enter the command: `mongo`. This will initialize the Mongo Shell and allow you to begin entering commands via the Mongo Shell. Congratulations, you’ve installed MongoDB. Your instructor will take it from here.

17. If mongod didn’t run, and instead your bash threw a "command not found" error, make sure you added MongoDB’s bin directory to your PATH variable (see step B.3). Then, close out git bash and try running mongod again.

18. If mongod starts but closes after a series of prompts, make sure you created the data/db directory in your root. MongoDB cannot run without this directory (see steps 2.1-2.2).

19. If you’re still encountering issues starting mongod, please ask for assistance from one of the TAs or the instructor.

<hr>


## Installing MongoDB On MacOS

### Step One: Installing MongoDB on MacOS

[back to installing](#installing-mongodb-on-your-machine)

1. Run the following command in terminal:

2. `brew install mongodb`

-----------------------------------------

### Step Two: Configuring MongoDB on MacOS

[back to installing](#installing-mongodb-on-your-machine)

1. **IMPORTANT**: You need to create a data directory for your MongoDB installation, or it will not work. 

2. Use the following exact commands (see note below if you want to know what these do):

   1. `sudo mkdir -p /data/db`

   2. `sudo chown -R $USER /data/db`

   3. `sudo chmod go+w /data/db`

3. With the data/db directory made, you're ready to run MongoDB. Enter this command in your terminal window: `mongod`

4. **NOTE**: No "b" at the end, simply `mongod`

5. If mongod didn’t exit from your window, great job! You’ve installed MongoDB. Your instructor will take it from here.

6. If mongod starts but closes after a series of prompts, make sure you created the data/db directory in your root directory, MongoDB cannot run without this directory (see steps 4.1-4.2).

7. If you’re still encountering issues starting mongod, please ask for assistance from one of the TAs or the instructor.

8. If you do not want to use homebrew, you can alternatively follow these instructions: <https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-os-x/>. However, installing MongoDB without homebrew can be a bit of a headache. Installing homebrew on your mac will make your life as a web developer a ton easier.

_The commands in #2 create a directory with administrative privileges, make your account the owner of that directory (instead of the "root" account owning it), and add write permissions to that directory so the apps you write are able to update your database_

