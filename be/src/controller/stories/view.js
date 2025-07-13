import story from "../../model/stories/story.js";
import { StatusCodes } from "http-status-codes";

export const list_story = async (req, res) => {
  try {
    const id_account = req.user._id;
    if (!id_account) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "Không có id tài khoản!",
      });
    }
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};

// ****
export const view_detail_story = async (req, res) => {
  try {
    const id_account = req.user._id;
    if (!id_account) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "Không có id tài khoản!",
      });
    }
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};
