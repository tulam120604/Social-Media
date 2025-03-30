// router/auth.js
import express from 'express';
import { sign_up } from '../controller/auth/profile.js';

const authRouter = express.Router();

authRouter.post('/auth/sign-up', sign_up)

export default authRouter;
