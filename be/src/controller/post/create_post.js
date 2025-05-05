import post from "../../model/post.js";
import { StatusCodes } from "http-status-codes";

export const create_post = async (req, res) => {
  try {
    const id_account = req.user.id;
    if (!id_account) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "Không có id tài khoản!",
      });
    }
    const value = {
      id_account,
      ...req.body,
    };
    await post.create(value);
    return res.status(StatusCodes.CREATED).json({
      error: false,
      message: "Tạo bài viết thành công!",
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};
