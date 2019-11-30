const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema(
  {
    comment: String,
    post: String,
    dateexclusion: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Comment", CommentSchema);
