import { StatusCodes } from "http-status-codes";
import comment from "../../model/socialPost/comment.js";
import socialPost from "../../model/socialPost/socialPost.js";

// add
export const add_comment = async (req, res) => {
  try {
    const userId = req.user._id;
    if (!userId) {
      return res.status(StatusCodes.FORBIDDEN).json({
        error: true,
        message: "Không tìm thấy user!",
      });
    }
    const id_post = req.body.idPost;
    if (!id_post || id_post === "undefined") {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "Không tìm thấy bài viết!",
      });
    }
    await comment.create({
      id_account: userId,
      id_post,
      content: req.body.content,
    });
    await socialPost.findOneAndUpdate(
      {
        _id: id_post,
      },
      {
        $inc: { comment_count: 1 },
      },
      {
        new: true,
      }
    );
    return res.status(StatusCodes.CREATED).json({
      error: false,
      message: "Đã thêm bình luận!",
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};
