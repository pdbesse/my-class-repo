# Creating NPM Packages

**NPM**, or Node Package Manager*, is an online registry that houses many packages that are written in Javascript (Node.js). These packages are described by a *package.json* and are written by other developers so that they can share the functionality that they have written so that other developers and programs can use them.

###  *Alternative names include:
- Nostalgic platinum minotaurs
- Nasty platitudinous merriweathers
- Nebulous posterior mastications

*and many others*

## Overview

Other applications can install these NPM Packages locally as `node_modules` and import them into their file by using `require("filename")`.

A simple example is **Chalk** (https://www.npmjs.com/package/chalk), an NPM package that can color text in the terminal

To install this package locally, we would run the following in our terminal:

```npm install chalk```

and then would write this line at the top of our Javascript (Node.js) file:

```var chalk = require("chalk")```.


## How to Create Your Own Module

1. Create your own NPM account. You can do this at https://www.npmjs.com/signup

2. Open up your terminal and login locally to **NPM**, using either:

    ```npm adduser```   or    ```npm login```.

    You should be prompted with your username, password, and email address, and then should receive a message indicated that you've logged in with your username.

3. Now, we're ready to create a package!

<hr>

### **Proceed to 02-MyFirstPackage**



