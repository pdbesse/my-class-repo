// Dependencies
const express = require('express');

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
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
// app.use(express.json());

// Data
const characters = [
  {
    routeName: 'yoda',
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    forcePoints: 2000,
  },
  {
    routeName: 'darthmaul',
    name: 'Darth Maul',
    role: 'Sith Lord',
    age: 200,
    forcePoints: 1200,
  },
  {
    routeName: 'obiwankenobi',
    name: 'Obi Wan Kenobi',
    role: 'Jedi Master',
    age: 55,
    forcePoints: 1350,
  },
];

// Routes
app.get('/', (req, res) => res.send('Welcome to the Star Wars Page!'));

// Displays all characters
app.get('/api/characters', (req, res) => res.json(characters));

// Displays a single character, or shows "No character found"
app.get('/api/characters/:character', (req, res) => {
  const chosen = req.params.character;

  console.log(chosen);

  // Check each character routename and see if the chosen character is the same as it's routename
  for (let i = 0; i < characters.length; i++) {
    // If the statement is true, send it back as JSON
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }
  // Otherwise tell the user no character was found
  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post('/api/characters', (req, res) => {

  //The req. body object allows you to access data in a string or JSON object from the client side. You generally use the req. body object to receive data through POST and PUT requests in the Express server. ... body object into the console results in the user's email and password.
  const newCharacter = req.body;

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
