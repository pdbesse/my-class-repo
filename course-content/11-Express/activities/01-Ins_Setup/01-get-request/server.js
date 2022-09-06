// Dependencies
const express = require('express');

const app = express();

const PORT = 3000;

// Data
const yoda = {
  name: 'Yoda',
  role: 'Jedi Master',
  age: 900,
  forcePoints: 2000,
};

const darthmaul = {
  name: 'Darth Maul',
  role: 'Sith Lord',
  age: 200,
  forcePoints: 1200,
};

const darthfarfar = {
  name: "Darth Far Far",
  role: "filth Lord",
  age: 5,
  forcePoints: 100000
}


// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

app.get('/yoda', (req, res) => {
  res.json(yoda);
});

app.get('/darthmaul', (req, res) => {
  res.json(darthmaul);
});

app.get("/farfarwittles", function(req, res) {
  res.json(darthfarfar);
});



// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
