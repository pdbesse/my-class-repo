# Deployment

In this activity we will deploy the ExtendedApp application to Heroku.

## Instructions

* To deploy the ExtendedApp application to Heroku make sure to perform the following:

  * Initialize the project folder as a git repo.

  * Add and commit your changes before pushing up to heroku.

### Hints

* If your deployment fails, run `heroku logs` while in the project directory. This should print all of the logs produced from the failed deployment. Usually the issue can be found at the start of any errors.

# Deploying on Heroku

## Instructions
1. With Terminal / Git Bash, navigate to your app's directory
2. Make sure your directory is `git tracked`, if it isn't run this command: `git init`
3. Make sure you have created a Heroku app and linked your repository to it.  If you don't, run this command: `heroku create` in your app's directory.
4. Add/update these scripts in the `package.json` file:
```javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
    "start:prod": "node server.js",
    "start:dev": "nodemon server.js",
  },
  ```
5. Make sure you have this dependency installed: `if-env`
6. Make sure you have this dependency installed as a development dependency: `nodemon`
```shell
npm i --save-dev nodemon
```
7. `git add .`
8. `git commit -m "some meaningful commit message"`
9. `git push heroku master`