// router/auth.js
import express from "express";
import {
  authenticate_with_google,
  log_out,
  sign_in,
  sign_up,
} from "../controller/auth/authHandler.js";
import { middleware } from "../middleware/auth.js";
import {
  countFriend,
  view_all_account,
  view_friend_suggest,
  view_friendList,
  view_friendRequest,
  view_profile,
  view_user_by_id,
} from "../controller/auth/view.js";
import {
  addFriend,
  handleFriendRequets,
  removeFriend,
} from "../controller/auth/friendRequest.js";

const authRouter = express.Router();

// sign up
authRouter.post("/auth/sign-up", sign_up);
authRouter.post("/auth/authenticate-with-google", authenticate_with_google);
// sign in
authRouter.post("/auth/sign-in", sign_in);
// view
authRouter.get("/auth/profile/view", middleware, view_profile);
authRouter.get("/auth/profile/view_user_by_id/:id", view_user_by_id);

// view all
authRouter.get("/auth/list_all", middleware, view_all_account);
// view friend requests
authRouter.get("/auth/view_friend_request", middleware, view_friendRequest);
// view friend suggets
authRouter.get("/auth/view_friend_suggest", middleware, view_friend_suggest);
// view list friend
authRouter.get("/auth/view_list_friend", middleware, view_friendList);
// count friend
authRouter.get("/auth/countFriend", middleware, countFriend);

// handle friend requests
authRouter.post("/auth/handle_friend_request", middleware, handleFriendRequets);
// add friend
authRouter.post("/auth/add_friend", middleware, addFriend);
// remove friend
authRouter.post("/auth/remove_friend", middleware, removeFriend);
// sign out
authRouter.post("/auth/log-out", log_out);

export default authRouter;
