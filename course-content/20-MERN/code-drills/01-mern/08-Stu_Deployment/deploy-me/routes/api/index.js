const router = require("express").Router();
const ToDo = require("./todo");

// routes to db tables
router.use("/todos", ToDo);
module.exports = router;