# Deploying a MERN App on Heroku

## Instructions
1. Build your MERN application!
2. With Terminal / Git Bash, navigate to your app's directory
3. Make sure your directory is `git tracked`, if it isn't run this command: `git init`
4. Make sure you have Heroku connected, if you dont, run this command: `heroku create`
5. Make sure your DB is provisioned on Heroku, if it isn't run either:
    - **MongoDB:** `heroku addons:create mongolab`
    - **MySQL:** `heroku addons:create jawsdb`
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
8. `git add .`
9. `git commit -m "some meaningful commit message"`
10. `git push heroku master`