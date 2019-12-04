const Post = require("../models/Post");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

/* Metodos */
module.exports = {
  async index(req, res) {
    const post = await Post.find().sort("-createdAt");
    return res.json(post);
  },

  async findPost(req, res) {
    console.log(req.params.id);
    const post = await Post.findById(req.params.id);
    return res.json(post);
  },

  async store(req, res) {
    console.log(req.body);
    const { user, location, description } = req.body;
    const { filename: image } = req.file;

    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(path.resolve(req.file.destination, "resized", image));

    fs.unlinkSync(req.file.path);

    const post = await Post.create({
      user,
      location,
      description,
      image
    });

    req.io.emit("post", post);

    return res.json(post);
  }
};
