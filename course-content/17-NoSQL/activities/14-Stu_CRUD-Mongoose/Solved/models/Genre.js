const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastAccessed: { type: Date, default: Date.now },
  description: { type: String, unique: true },
});

const Genre = mongoose.model('Genre', genreSchema);

const handleError = (err) => console.error(err);

// Will add data only if collection is empty to prevent duplicates
// More than one document can have the same name value
Genre.find({}).exec((err, collection) => {
  if (collection.length === 0) {
    Genre.insertMany(
      // https://mongoosejs.com/docs/validation.html#the-unique-option-is-not-a-validator
      // Q. I declared a schema property as unique but I can still save duplicates. What gives?

      // A. Mongoose doesn't handle unique on its own: { name: { type: String, unique: true } } is just a shorthand for creating a MongoDB unique index on name. For example, if MongoDB doesn't already have a unique index on name, the below code will not error despite the fact that unique is true.

      [
        { name: 'Kids', description: "Yeah!" },
        { name: 'Kids', description: "Yeah!"},
        { name: 'Kids' },
        { name: 'Romance' },
        { name: 'Mystery' },
        { name: 'Contemporary' },
        { name: 'Biography' },
      ],
      (insertErr) => {
        if (insertErr) {
          handleError(insertErr);
        }
      }
    );
  }
});

module.exports = Genre;


// {
//   People (collection): {
//     name(Unique Field): {
//       bob(value): "document",//not a list
//       luke(value): "document"
//     },
//     location: {
//       "oakland": [{document},{document},{document}],
//       "SF": [{document},{document},{document}]
//     }

//   }
// }
