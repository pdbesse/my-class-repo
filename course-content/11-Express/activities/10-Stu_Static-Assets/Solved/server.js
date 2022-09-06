const express = require('express');

const app = express();
const PORT = process.env.port || 3001;
const path = require('path');

const db = [];

// Serve images, css files, js files from the public directory
// Allows us to reference files with their relative path
// Example: http://localhost:3001/images/gh.png

// Add a static middleware for serving assets in the public folder
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

// app.get('/about', (req, res) => res.sendFile(path.join(__dirname, '/public/about.html')));

// app.get('/jobs', (req, res) => res.json(db));

app.listen(PORT, () =>
  console.log(
    `Serving static asset routes on port at http://localhost:${PORT}!`
  )
);
