import socialPost from "../../model/socialPost/socialPost.js";
import { StatusCodes } from "http-status-codes";

export const view_post = async () => {
  try {
    const user = await socialPost.find();
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};
