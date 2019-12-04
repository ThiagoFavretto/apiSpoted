const Comment = require("../models/Comment");

/* Metodos */
module.exports = {
  async index(req, res) {
    const comment = await Comment.find({ post: req.params.id }).sort(
      "-createdAt"
    );
    return res.json(comment);
  },

  async store(req, res) {
    const { comment, post } = req.body;
    const commentSaved = await Comment.create({
      comment,
      post
    });

    // req.io.emit("comment", commetn);

    return res.json(commentSaved);
  }
};
