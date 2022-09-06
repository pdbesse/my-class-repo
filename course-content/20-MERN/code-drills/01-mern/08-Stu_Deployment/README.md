# Deployment

In this activity we will deploy the React Reading List application to Heroku.

## Instructions

* Deploy the React Reading List application to Heroku. Make sure to perform the following:

  * Initialize the project folder as a git repo.

  * Create a Heroku app for the React Reading List App.

  * Add a MongoLab Addon for the React Reading List Heroku app.

  * Add and commit your changes before pushing up to heroku.

### Hints

* Make sure you add and commit all changes before pushing up to Heroku.

* If your deployment fails, run `heroku logs` while in the project directory. This should print all of the logs produced from the failed deployment. Usually the issue can be found at the start of any errors.

# Deploying a MERN App on Heroku - Repeate

## Instructions
1. Build your MERN application!
2. With Terminal / Git Bash, navigate to your app's directory
3. Make sure your directory is `git tracked`, if it isn't run this command: `git init`
4. Make sure you have Heroku connected, if you dont, run this command: `heroku create`
5. For your database (DB), it's recommended that you use AtlasDB, a mongo database that is not a Heroku provisioned resource.
    * Log into the [MongoDB](https://www.mongodb.com/) web site.
        * If you haven't created an account, go ahead and create one.
    * Click "Atlas" Tab @'Navigation Bar'.
    * Click "Clusters" @'Left Hand Column'.
    * Click "Build A Cluster" Button (Create A New Cluster).
    * Click "Create A Cluster" (Shared Clusters/FREE).
    * Cloud Provider & Region: Click "AWS" Button @'Page Center'.
    * Select a Recommended Region.
    * Click "Create Cluster" Button @'Footer'.
    * Wait 1-3 Minutes for your cluster's creation.
    * Click "CONNECT" Button @'SANDBOX/Cluster0 Panel'.
        * Click "Allow Access From Anywhere" Button @'Whitelist a connection IP address'.
        * Enter Username AND Click "Autogenerate Secure Password" Button @'Password Field'. (NOTE!: Cut+Pase or store you username/password somewhere so you can use it later for the connection string!)
        * Click "Create Database User" Button.
    * Click "Choose A Connection Method" Button.
    * Click "Connect Using MongoDB Compass" Button.
    * Click "Copy" Button.
    * The copied connection string should have the following form (update the username, password and replace dbname with "budget").

    ```
    mongodb+srv://<username>:<password>@cluster0.ffma0.mongodb.net/<dbname>
    ```

    * Log into the [Heroku](https://www.heroku.com/) web site.
    * Select your application.
     * Select the Settings Tab.
     * Click the "Reveal Config Vars" button in the "Config Vars" section. Create the MONGODB_URI variable and assign it the connection string from AtlasDB.  MONGODB_URI is the variable that Heroku places in the environment of your application. Your back-end application should import this so it can connect to the provisioned server instance.
6. Add these scripts to the `package.json` in your server level:
```
  "scripts": {
    "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
    "start:prod": "node server.js",
    "start:dev": "concurrently \"nodemon --ignore 'client/*'\" \"npm run client\"",
    "client": "cd client && npm run start",
    "install": "cd client && npm install",
    "build": "cd client && npm run build",
    "postinstall": "npm run seed",
    "heroku-postbuild": "npm run build",
    "seed": "cd seeds && node seed.js"
  },
  ```
7. Make sure you have this dependency installed: `if-env`
8. Make sure you have this dependency installed as a development dependency: `nodemon`
```shell
npm i --save-dev nodemon
```
9. `git add .`
10. `git commit -m "some meaningful commit message"`
11. `git push heroku master`