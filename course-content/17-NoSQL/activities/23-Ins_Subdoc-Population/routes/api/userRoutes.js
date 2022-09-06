const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require('../../controllers/userController');

// /api/users
// POST  http://localhost:3001/api/users
// {
//   "first": "Ada",
//   "last": "Lovelace",
//   "age": 36
// }
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

module.exports = router;
