import { StatusCodes } from "http-status-codes";
import comment from "../../model/socialPost/comment.js";
import socialPost from "../../model/socialPost/socialPost.js";
import like from "../../model/socialPost/like.js";

// add comment
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
    const createdComment = await comment.create({
      id_account: userId,
      id_post,
      content: req.body.content,
    });
    if (createdComment) {
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
    }
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: true,
      message: "Lỗi khi bình luận!",
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};

// add status like
export const add_like = async (req, res) => {
  try {
    const userId = req.user._id;
    const { idPost: id_post, status } = req.body;

    if (!userId) {
      return res.status(StatusCodes.FORBIDDEN).json({
        error: true,
        message: "Không tìm thấy user!",
      });
    }

    if (!id_post || id_post === "undefined") {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "Không tìm thấy bài viết!",
      });
    }

    if (status === "like") {
      // Kiểm tra đã like chưa
      const existingLike = await like.findOne({
        id_account: userId,
        id_post,
        like: true,
      });

      if (!existingLike) {
        const createLike = await like.create({
          id_account: userId,
          id_post,
          like: true,
        });

        if (createLike) {
          await socialPost.findOneAndUpdate(
            { _id: id_post },
            { $inc: { like_count: 1 } },
            { new: true }
          );
        }
      }
    } else {
      // Unlike hoặc bỏ reaction
      const deleted = await like.findOneAndDelete({
        id_account: userId,
        id_post,
      });

      if (deleted) {
        await socialPost.findOneAndUpdate(
          { _id: id_post },
          { $inc: { like_count: -1 } },
          { new: true }
        );
      }
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Cập nhật tương tác thành công.",
    });
  } catch (error) {
    console.error("Lỗi khi thêm like:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error?.message || "Đã có lỗi xảy ra.",
    });
  }
};
