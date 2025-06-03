import { StatusCodes } from "http-status-codes";
import comment from "../../model/socialPost/comment.js";

export const list_comment = async (req, res) => {
  try {
    const { _page = 1, _limit = 5 } = req.query;
    const page = parseInt(_page);
    const limit = parseInt(_limit);
    const skip = (page - 1) * limit;
    if (limit > 100)
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: true,
        message: "Vượt quá giới hạn danh sách bình luận!",
      });
    if (limit < 1)
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: true,
        message: "Không được giới hạn bình luận nhỏ hơn 1!",
      });
    const data = await comment
      .find()
      .skip(skip)
      .limit(limit)
      .populate("id_account", "userName picture")
      .lean();
      const total = await comment.countDocuments();
    return res.status(StatusCodes.OK).json({
      error: false,
      data,
      pagination: {
        page,
        limit,
        totalPage : Math.ceil(total / limit)
      },
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};
