import { StatusCodes } from "http-status-codes";
import comment from "../../model/socialPost/comment.js";

export const remove_comment = async (req, res) => {
  try {
    const idUser = req.user._id;
    if (!idUser) {
      return res.status(StatusCodes.FORBIDDEN).json({
        error: true,
        message: "Không tìm thấy người dùng",
      });
    }
    const _id = req.params.id;
    if (!_id) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "Không tìm thấy bình luận",
      });
    }
    await comment.findOneAndDelete({ _id });
    return res.status(StatusCodes.OK).json({
      error: false,
      message: "Đã xóa bình luận!",
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};
