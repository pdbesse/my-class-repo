const express = require('express');
const path = require('path');
const termData = require('./db/terms.json');
const PORT = 3001;

const app = express();

// Sets up the Express app to handle data parsing
//https://expressjs.com/en/resources/middleware/body-parser.html#bodyparserurlencodedoptions
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// {
//   "name": "Asher",
//   "role": "Filth Lord",
//   "age": 3,
//   "forcePoints": 2000
//    "friend" : [{
//          "name": "Farley",
//          "role": "Furry Lord",
//          "age": 3,
//          "forcePoints": 2000
//      }]
// }


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/terms', (req, res) => res.json(termData));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
