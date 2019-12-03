const express = require("express");
const PostController = require("./controllers/PostController");
const LikeController = require("./controllers/LikeController");
const CommentController = require("./controllers/CommentController");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const routes = new express.Router();
const upload = multer(uploadConfig);

//post
routes.get("/posts", PostController.index);

routes.get("/posts/:id/commetn", PostController.findPost);

routes.post("/posts", upload.single("image"), PostController.store);

routes.post("/posts/:id/like", LikeController.store);

//comment
routes.get("/comment/:id", CommentController.index);

routes.post("/comment", CommentController.store);

module.exports = routes;
