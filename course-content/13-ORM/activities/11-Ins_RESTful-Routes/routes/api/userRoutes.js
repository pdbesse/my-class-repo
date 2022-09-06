const router = require('express').Router();
const User = require('../../models/User');

// This route uses async/await with '.catch()' for errors
// and no HTTP status codes
// http://localhost:3001/api/users
router.get('/', async (req, res) => {
  const userData = await User.findAll().catch((err) => {
    res.status(400).json(err);
  });
  res.status(200).json(userData);
});

// This route uses async/await with try/catch for errors
// along with HTTP status codes

// {
//   "username": "user1",
//   "email": "user1@email.com",
//   "password": "Password123"
// }
// http://localhost:3001/api/users
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    // 200 status code means the request is successful
    res.status(200).json(userData);
  } catch (err) {
    // 400 status code means the server could not understand the request
    res.status(400).json(err);
  }
});

module.exports = router;
