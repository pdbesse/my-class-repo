var mongoose = require("mongoose");

// schema structure
var Schema = mongoose.Schema

// create schema
var ToDoSchema = new Schema({
  note: {
    type: String,
    required: true
  },
})

// create model
var ToDo = mongoose.model("ToDo", ToDoSchema);

// export model
module.exports = ToDo;