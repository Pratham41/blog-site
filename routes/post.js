const express = require('express');
const router = express.Router();
// GETTING CONTROLLERS
const {
  createPost,
  listPosts,
  getPostById,
  addComment,
} = require('../controllers/post');

// ROUTES
router.route('/').post(createPost);
router.route('/').get(listPosts);
router.route('/:id').get(getPostById).put(addComment);
module.exports = router;
