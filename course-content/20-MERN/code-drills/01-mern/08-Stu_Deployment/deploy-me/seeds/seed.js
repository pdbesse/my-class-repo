const db = require("../models");
const mongoose = require("mongoose");

const list = [
  {
    note: "Wake up in the morning feeling like P Diddy",
  },
  {
    note: "Grab my glasses, I'm out the door, I'm gonna hit this city",
  },
  {
    note: "Before I leave, brush my teeth with a bottle of Jack",
  },
  {
    note: "'cause when I leave for the night, I ain't coming back."
  }
]

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/todolist");

db.ToDo.collection.drop();

db.ToDo.create(list).then(data => {
  console.log(data)
  process.exit();
}).catch(err => console.log(err))