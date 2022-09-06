// 🔑 To generate a token in our apps, we start by adding a auth.js file to our server's utils directory 
// and requiring the jsonwebtoken library to provide the functionality to check the validity of 
// the token using a secret and expiration:
const jwt = require('jsonwebtoken');

// 🔑 We then assign values for both a secret and expiration. 
// The secret is a private key that signs the token and enables the server to verify whether the token is valid. 
// The expiration is the length of time the token remains valid before expiring:
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

// 🔑 Next, we add a signToken() function to combine the payload, secret, and string and return our token as a string:
module.exports = {
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
