import express from "express";
import { create_socialPost } from "../controller/post/create_post.js";
import { middleware } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";

const socialPostRouter = express.Router();

// postRouter("/post/list", middleware, create_post);
socialPostRouter.post(
  "/socialPost/create",
  middleware,
  upload.array("media_urls"),
  create_socialPost
);

export default socialPostRouter;
