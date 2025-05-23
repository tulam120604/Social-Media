import express from "express";
import { create_socialPost } from "../controller/post/create_post.js";
import { middleware } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";
import { list_my_post, list_post } from "../controller/post/view_post.js";

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

export default socialPostRouter;
