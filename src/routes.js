const express = require("express");
const PostController = require("./controllers/PostController");
const LikeController = require("./controllers/LikeController");
const UserController = require("./controllers/UserController");
const CommentController = require("./controllers/CommentController");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const routes = new express.Router();
const upload = multer(uploadConfig);
const any = multer();

//post
routes.get("/posts", PostController.index);

routes.get("/posts/:id/commetn", PostController.findPost);

routes.post("/posts", upload.single("image"), PostController.store);

routes.post("/posts/:id/like", LikeController.store);

//comment
routes.get("/comment/:id", CommentController.index);

routes.post("/comment", any.any(), CommentController.store);

//user
routes.get("/user/:id", UserController.index);

routes.post("/user", any.any(), UserController.store);

module.exports = routes;
