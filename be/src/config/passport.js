import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import account from "../model/account.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5173/",
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        const check_user = await account.findOne({ _id: profile.id });
        if (check_user) {
          return cb(null, check_user);
        }
        const user = await account.create(profile);
        return cb(null, user);
      } catch (error) {
        return cb(error);
      }
    }
  )
);
