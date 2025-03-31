// router/auth.js
import express from "express";
import { sign_in, sign_up } from "../controller/auth/profile.js";

const authRouter = express.Router();

authRouter.post("/auth/sign-up", sign_up);
authRouter.post("/auth/sign-in", sign_in);

export default authRouter;
