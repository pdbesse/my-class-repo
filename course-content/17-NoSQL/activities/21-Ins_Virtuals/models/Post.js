const { Schema, model } = require('mongoose');

// Schema to create Post model
const postSchema = new Schema(
  {
    text: String,
    username: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }],
  },
  {
    // https://mongoosejs.com/docs/guide.html#toJSON
    // Mongoose will not include virtuals in the schema unless you explicitly tell it to. 
    // As a result, we add an options object to our schema definition to tell Mongoose to include virtuals by setting the virtuals property to true.
    toJSON: {
      virtuals: true,
    },
    id: false,//don't return the id of the `comment`` element(s)
  }
);
// postSchema.set('toObject', {
//       virtuals: true,
//     }, id: false);
// Create a virtual property `commentCount` that gets the amount of comments per post
postSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

// Initialize our Post model
const Post = model('post', postSchema);

module.exports = Post;
