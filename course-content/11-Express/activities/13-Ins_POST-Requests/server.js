const express = require('express');

const PORT = 3001;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET request
app.get('/api/reviews', (req, res) => {
  // Let the client know that their request was received
  res.json(`${req.method} request received`);

  // Show the user agent information in the terminal
  console.info(req.rawHeaders);

  // Log our request to the terminal
  console.info(`${req.method} request received`);
});

// POST request
// http://localhost:3001/api/reviews
// {
//   "movie": "The Notebook",
//   "username": "kibbles1234",
//   "review": "Very helpful in putting me to sleep",
//   "id": 5
// }
app.post('/api/reviews', (req, res) => {
  // Let the client know that their POST request was received
  res.json(`${req.method} request received`);

  // Show the user agent information in the terminal
  console.info(req.rawHeaders);

  // Log our request to the terminal
  console.info(`${req.method} request received`);

  // Log our request body content to the terminal
  console.log(req.body);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
