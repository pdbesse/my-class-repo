const router = require('express').Router();
const {
  getSinglePost,
  getPosts,
  createPost,
} = require('../../controllers/postController');

//POST http://localhost:3001/api/posts
// Now we can make a post that we can use to populate the posts array for our new user. Be sure to include a userId property that references the _id of the new user that we just created.
// {
//   "meta": {
//     "upvotes": 156,
//     "bookmarks": 12
//   },
//   "published": true,
//   "text": "Why pineapple is awesome on Pizza: A true story",
//   "userId": "???"
// }
router.route('/').get(getPosts).post(createPost);

router.route('/:postId').get(getSinglePost);

module.exports = router;
