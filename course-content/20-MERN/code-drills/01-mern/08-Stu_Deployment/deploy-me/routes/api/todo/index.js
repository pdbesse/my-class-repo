const router = require("express").Router();
const todoController = require("../../../controllers/todoController");

// Matches with "api/todos"
router.route("/")
  .get(todoController.find);

module.exports = router;
