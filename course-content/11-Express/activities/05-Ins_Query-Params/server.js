const express = require('express');
////https://nodejs.org/api/modules.html#modules_require_id
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

// GET route to get all of the terms
app.get('/api/terms', (req, res) => res.json(termData));

// app.get('/api/terms', (req, res) => {
//   res.json(termData);
// });


//what if...

// app.get('/api/terms/anything', (req, res) => {
//   // ????? what would occur to the route below?
//   res.send("Yo!") 
// });

// app.get('/api/terms/seo', (req, res) => {
//   return res.json(termData[0]);
//  }


// GET route that returns any specific term
app.get('/api/terms/:term/', (req, res) => {
  // /api/terms/farley/cat
  // /api/terms/asher
  // /api/terms/seo
  // /api/terms/rest
  // /api/terms/anything

  req.params //=> {term: "seo"}
  req.params //=> {term: "asher"}
  // Coerce the specific search term to lowercase
  const requestedTerm = req.params.term.toLowerCase();

  // Iterate through the terms name to check if it matches `req.params.term`
  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No match found');
});



// Fallback route for when a user attempts to visit routes that don't exist
app.get('*', (req, res) =>
  res.send(
    `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
  )
);

// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);



//===================

//Another Example

// const users = [{id: 1, name: "Farley"}, {id: 2, name: "Asher"}, {id: 3, name: "Sage"}]
// const posts = [{id: 1, userId: 1, content: "meow"}, {id: 2, userId: 3, content: "DADADA"},{id: 3, userId: 2, content: "Vroom"}]
// app.get('/api/users', (req, res) =>{
//   res.json(users)
// }
// );

// app.get('/api/users/:id', (req, res) =>{
//   users.forEach(function(obj){
//     if(obj.id === req.params.id){
//       res.json(obj)
//     }
//   })  
// });


// app.get('/api/users/:id/posts', (req, res) => {
//   const resObj = {
//     post: []
//   };
//   users.forEach(function(obj){
//     if(obj.id === req.params.id){
//       resObj.userInfo = obj;
//     }
//   });
//   posts.forEach(function(obj){ 
//     if(obj.userId === req.params.id){
//       resObj.post.push(obj);
//     }
//   });
//   res.json(resObj); 
// });

// app.get('/api/users/:id/posts/:postID', (req, res) => {
//   const resObj = {};
//   users.forEach(function(obj){
//     if(obj.id === req.params.id){
//       resObj.userInfo = obj;
//     }
//   });
//   posts.forEach(function(obj){
//     if(obj.id === req.params.postID && obj.id === req.params.id){
//       resObj.post = obj;
//     }
//   });
//   res.json(resObj);  
// });
