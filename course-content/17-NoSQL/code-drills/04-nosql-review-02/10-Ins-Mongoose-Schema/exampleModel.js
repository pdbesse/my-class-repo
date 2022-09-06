const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExampleSchema = new Schema({
  string: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  number: {
    type: Number,
    unique: true,
    required: true
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  boolean: Boolean,

  array: Array,

  date: {
    type: Date,
    default: Date.now
  },

  longstring: {
    type: String,
    validate: [({ length }) => length >= 6, "Longstring should be longer."]
    // validate: [(str) => str.length >= 6, "Longstring should be longer."]
    //longstring: Longstring should be longer. if given 'cat'
  }
});

const Example = mongoose.model("Example", ExampleSchema);

module.exports = Example;




// const ExampleSchema = new Schema({
//   name: {
//     type: String,
//     trim: true,
//     required: "String is Required"
//   },

//   ssn: {
//     type: Number,
//     unique: true,
//     required: true
//   },

//   email: {
//     type: String,
//     match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
//     required: true
//   },

//   loveCats: {
//     type: Boolean,
//     // required: true,
//     default: true
//   },

//   hobbies: {
//     type: Array,
//     required: true
//   },

//   date: {
//     type: Date,
//     default: Date.now
//   },

//   selfDescription: {
//     type: String,
//     validate: [({ length }) => length <= 6, "Longstring should be longer."],
//     required: true
//   }
// });