// router/auth.js
import express from "express";
import {
  authenticate_with_google,
  log_out,
  sign_in,
  sign_up,
} from "../controller/auth/authHandler.js";
import { middleware } from "../middleware/auth.js";
import { view_profile } from "../controller/auth/view.js";

const authRouter = express.Router();

// sign up
authRouter.post("/auth/sign-up", sign_up);
authRouter.post("/auth/authenticate-with-google", authenticate_with_google);
// sign in
authRouter.post("/auth/sign-in", sign_in);
// view
authRouter.get("/auth/profile/view", middleware, view_profile);
// sign out
authRouter.post("/auth/log-out", log_out);

export default authRouter;
