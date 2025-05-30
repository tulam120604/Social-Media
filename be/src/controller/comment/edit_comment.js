import { StatusCodes } from "http-status-codes";
import comment from "../../model/socialPost/comment.js";

export const edit_comment = async (req, res) => {
  try {
    const idUser = req.user._id;
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};
