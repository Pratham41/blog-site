const mongoose = require('mongoose');

const commentSchema = mongoose.Schema(
  {
    user: { type: String, required: true, default: '' },
    comment: { type: String, required: true, default: '' },
  },
  {
    timestamps: true,
  }
);

const postSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Posts', postSchema);
