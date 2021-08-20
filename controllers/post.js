// GETTING POST MODEL
const Posts = require('../models/post');

// CONTROLLER FOR LIST POSTS
exports.listPosts = async (req, res) => {
  try {
    const postList = await Posts.find({}).sort({ _id: -1 });
    if (postList) {
      res.status(200).json(postList);
    } else {
      return res.status(400).json({
        status: 'failed',
        message: 'posts not found',
        error: err,
      });
    }
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: 'something went wrong',
      error: err,
    });
  }
};

// CONTROLLER FOR GETTING POST BY ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: 'failed to get post',
      error: err,
    });
  }
};

// CONTROLLER FOR CREATE NEW POST
exports.createPost = async (req, res) => {
  const postData = new Posts(req.body);
  try {
    const createdPost = await postData.save();
    res.status(200).json(createdPost);
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: 'failed to add post',
      error: err,
    });
  }
};

// CONTROLLER FOR ADDING REVIEW
exports.addComment = async (req, res) => {
  try {
    const userComment = { user: req.body.user, comment: req.body.comment };
    const updatedPost = await Posts.updateOne(
      { _id: req.params.id },
      { $push: { comments: userComment } }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: 'failed to add comment',
      error: err,
    });
  }
};
