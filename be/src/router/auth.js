// router/auth.js
import express from 'express';
import passport from 'passport';

const authRouter = express.Router();

authRouter.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

authRouter.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Sau khi xác thực thành công, chuyển hướng về trang chủ
    res.redirect('/');
  }
);

export default authRouter;
