import account from "../../model/auth/account.js";
import friendList from "../../model/auth/friendList.js";
import friendRequest from "../../model/auth/friendRequest.js";
import { StatusCodes } from "http-status-codes";

export const view_profile = async (req, res) => {
  try {
    const result = req.user;
    console.log(result);
    const data = {
      userName: result.userName,
      email: result.email,
      picture: result.picture,
      role: result.role,
    };
    return res.status(StatusCodes.OK).json({
      error: false,
      data,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};

// view all account
export const view_all_account = async (req, res) => {
  try {
    const data = await account.find({}, { password: 0 });
    return res.status(StatusCodes.OK).json({
      error: false,
      data,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};

// view list friend
export const view_friendList = async (req, res) => {
  try {
    const userId = req.user._id;
    const data = await friendList.find({ userId }).populate("friendId");
    return res.status(StatusCodes.OK).json({
      error: false,
      data,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};

// view list  friend request
export const view_friendRequest = async () => {
  try {
    const userId = req.user._id;
    const data = await friendRequest.find({ userId }).populate("receiverId");
    return res.status(StatusCodes.OK).json({
      error: false,
      data,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};
