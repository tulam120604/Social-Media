import express from "express";
import { create_post } from "../controller/post/create_post";
import { middleware } from "../middleware/auth";

const postRouter = express.Router();

// postRouter("/post/list", middleware, create_post);
postRouter("/post/create", middleware, create_post);

export default postRouter;
