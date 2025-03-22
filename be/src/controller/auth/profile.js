import account from "../../model/account.js";
import { StatusCodes } from "http-status-codes";
import passport from "passport";
import { Strategy } from "passport-google-oauth20";

// sign up
export const sign_up = async (req, res) => {
  try {
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: `500: ${error}`,
    });
  }
};
