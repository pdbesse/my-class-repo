const db = require("../models");

// Defining methods for the songController
module.exports = {
  // get all songs from database
  find: function (req, res) {
    db.ToDo
      .find()
      .sort("_id")
      .then(todos => res.status(200).json(todos))
      .catch(err => res.status(503).json(err));
  }
};
