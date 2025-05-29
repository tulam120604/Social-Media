import express from "express";
import { create_socialPost } from "../controller/post/create_post.js";
import { middleware } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";
import { list_my_post, list_post } from "../controller/post/view_post.js";
import { remove_my_post } from "../controller/post/remove_post.js";
import { add_comment } from "../controller/comment/add_comment.js";
import { list_comment } from "../controller/comment/list_comment.js";

const socialPostRouter = express.Router();

// postRouter("/post/list", middleware, create_post);
socialPostRouter.post(
  "/socialPost/create",
  middleware,
  upload.array("media_urls"),
  create_socialPost
);
// list
socialPostRouter.get("/socialPost/list", middleware, list_post);
// list my post
socialPostRouter.get("/socialPost/list_my_post", middleware, list_my_post);
// remove post
socialPostRouter.delete(
  "/socialPost/remove_my_post/:id",
  middleware,
  remove_my_post
);
// add comment post
socialPostRouter.post("/socialPost/add_comment", middleware, add_comment);
// list comment post
socialPostRouter.get("/socialPost/list_comment", list_comment);

export default socialPostRouter;
