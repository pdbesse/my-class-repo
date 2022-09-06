// Dependencies
const express = require('express');

const app = express();
const PORT = 3000;

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
    role: 'Jedi Knight',
    age: 60,
    forcePoints: 1350,
  },
];

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

app.get('/api/:character', (req, res) => {
  ///api/yoda?location=true
  // console.log(req.query)
  const chosen = req.params //{character: yoda}
  console.log(req.params);
  // What does this log?
  console.log(chosen);
  res.json(req.params);

});

app.get('/api/users/:userId/post/:postid', (req, res) => {
  //http://localhost:3000/api/users/1/post/44
  
  console.log(req.params);//{character: "Jedi", id: 2}
  // What does this log?
  console.log(req.params);
  res.json(req.params);

  // res.end();
});

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
