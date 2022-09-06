const express = require('express');

const PORT = 3001;
const app = express();

//🔑 When we run the application and visit the http://localhost:3001/ page, we are presented with a definition for an API.
//We can send entire files that contain HTML using res.sendFile().
//We can send a body parameter to the client using the res.send() method.
//This body parameter can be a string, buffer, or even an array. In the root path, /, for example, we send a string that contains a p element that gets rendered in the browser:
app.get('/', (req, res) => {
  res.send(
    `<p>API - An application programming interface, is a computing interface that defines interactions between multiple software intermediaries</p>`
  );
});

//🔑 This example also includes another endpoint, http://localhost:3001/api.
//🔑 This endpoint is very similar to the first one -- but the first returns a simple string that contains an HTML element, and the second is an api endpoint that returns JSON.
//Notice that we are using a new method, res.json(). This method sends a JSON response with the correct content type.
//In the case of the /api endpoint, we will send the client JSON that contains the definition for the term API. Notice that the data is organized like a typical JSON object:
app.get('/api', (req, res) => {
  res.json({
    term: 'api',
    description:
      'An application programming interface, is a computing interface that defines interactions between multiple software intermediaries',
  });
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
