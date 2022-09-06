const router = require('express').Router();
const { getComments,
  getSingleComment,
  createComment,
} = require('../../controllers/commentController');

// /api/comments
router.route('/').get(getComments).post(createComment);

// /api/comments/:commentId
router.route('/:commentId').get(getSingleComment);

module.exports = router;

// For Reference
// getComments(req, res) {
//     Comment.find()
//       .then((comment) => res.json(comment))
//       .catch((err) => res.status(500).json(err));
//   }
// createComment(req, res) {
//   Comment.create(req.body)
//     .then((comment) => {
//       return Post.findOneAndUpdate(
//         { _id: req.body.postId },
//         { $push: { comments: comment._id } },
//         { new: true }
//       );
//     })
//     .then((post) =>
//       !post
//         ? res
//             .status(404)
//             .json({ message: 'comment created, but no posts with this ID' })
//         : res.json({ message: 'comment created' })
//     )
//     .catch((err) => {
//       console.error(err);
//     });
// },
