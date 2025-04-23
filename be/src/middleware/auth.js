import jwt from "jsonwebtoken";
import account from "../model/account.js";
import { StatusCodes } from "http-status-codes";

export const create_token = (userId) => {
  return jwt.sign({ userId }, process.env.SECRET_JWT, { expiresIn: "7d" });
};

export async function verify_token(value) {
  const decoded_jwt = await new Promise((resolve, reject) => {
    jwt.verify(value, process.env.SECRET_JWT, (error, decoded) => {
      if (error) {
        return reject(error);
      }
      resolve(decoded);
    });
  });
  const user = await account.findOne({ _id: decoded_jwt.userId });
  return user;
}

export async function middleware(req, res, next) {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "no jwt",
      });
    }
    const user = await verify_token(token);
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "no account",
      });
    }
    req.user = user;
    return next();
  } catch (error) {
    return error;
  }
}
