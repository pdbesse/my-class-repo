const { Tags, Post } = require('../models');

module.exports = {
  getTags(req, res) {
    Tags.find({})
      .select('-__v')
      .populate('posts')
      .then((tags) => res.json(tags))
      .catch((err) => res.status(500).json(err));
  },
  getSingleTag(req, res) {
    Tags.findOne({ _id: req.params.tagId })
      .select('-__v')
      .populate('posts')
      .then((tag) =>
        !tag
          ? res.status(404).json({ message: 'No tag with that ID' })
          : res.json(tag)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new tag
  createTag(req, res) {
    Tags.create(req.body)
      .then((tag) => {
        return Post.findOneAndUpdate(
          { _id: req.body.postId },
          // $addToSet do not add the item to the given field if it already contains it, on the other hand 
          // $push will add the given object to field whether it exists or not.
          { $addToSet: { tags: tag._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'Tag created, but found no post with that ID' })
          : res.json('Created the tag 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
