import account from "../../model/account.js";
import { StatusCodes } from "http-status-codes";

export const view_profile = async (req, res) => {
  try {
    const result = req.user;
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "Không có thông tin!",
      });
    }
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
