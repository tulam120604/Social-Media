import socialPost from "../../model/socialPost/socialPost.js";
import comment from "../../model/socialPost/comment.js";
import like from '../../model/socialPost/like.js'
import { StatusCodes } from "http-status-codes";

export const remove_my_post = async (req, res) => {
  try {
    const userId = req.user._id;
    if (!userId) {
      return res.status(StatusCodes.FORBIDDEN).json({
        error: true,
        message: "Không tìm thấy user!",
      });
    }
    const idPost = req.params.id;
    if (!idPost || idPost === "undefined") {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "Không tìm thấy bài viết!",
      });
    }
    await socialPost.findOneAndDelete({ _id: idPost });
    // xoa binh luan cua bai viet
    await comment.deleteMany({ id_post: idPost });
    // xoa yeu thich cua bai viet
    await like.deleteMany({ id_post: idPost });
    return res.status(StatusCodes.OK).json({
      error: false,
      message: "Đã xóa bài viết",
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};
