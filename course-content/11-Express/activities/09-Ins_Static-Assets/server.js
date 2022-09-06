const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve images, css files, js files from the public directory
// Allows us to reference files with their relative path
// Example: http://localhost:3001/images/cat.jpg
//https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

//Yikes!!! Can you image a route for every resources!?! 
app.get('/image', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/images/cat.jpg'))
);

app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);
