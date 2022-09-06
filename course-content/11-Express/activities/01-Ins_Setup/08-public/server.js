//https://nodejs.org/api/modules.html#modules_require_id
const express = require('express');
//https://nodejs.org/dist/latest-v14.x/docs/api/path.html#path_path
//The path module provides utilities for working with file and directory paths.
//The default operation of the path module varies based on the operating system on which a Node.js application is running. Specifically, when running on a Windows operating system, the path module will assume that Windows-style paths are being used.
const path = require('path');

const app = express();
const PORT = 3001;

//http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

//Note: Because we set up middleware for the public folder, 
//Express.js automatically looks for an index.html in the public folder to send when a user visits the root path. 
//Because we do have an index.html file in the public folder, that is shown in the browser now. 
//If we didn't have an index.html file in the public folder, the browser would display the message Navigate to /send or /routes.
//https://expressjs.com/en/api.html#res.send
app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>
  //http://expressjs.com/en/api.html#res.sendFile
  //path.join()
  //https://nodejs.org/dist/latest-v14.x/docs/api/path.html#path_path_join_paths
  //The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
  //__dirname
  //https://nodejs.org/dist/latest-v14.x/docs/api/modules.html#modules_dirname
  // The directory name of the current module. This is the same as the path.dirname() of the __filename.
  res.sendFile(path.join(__dirname, 'public/sendFile.html'))
);

app.get('/routes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/routes.html'))
);

//With all Express.js apps, it is important to initialize the server using the app.listen() method.
//The listen() method accepts a port as the first argument and a callback function as the second argument. The listen() method is responsible for listening for incoming connections on the specified port:
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
