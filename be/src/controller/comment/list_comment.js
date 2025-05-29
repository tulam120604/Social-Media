import { StatusCodes } from "http-status-codes";
import comment from "../../model/socialPost/comment.js";

export const list_comment = async (req, res) => {
  try {
    const data = await comment
      .find()
      .populate("id_account", "userName picture")
      .lean();
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
