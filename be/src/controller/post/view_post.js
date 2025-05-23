import socialPost from "../../model/socialPost/socialPost.js";
import { StatusCodes } from "http-status-codes";

export const list_post = async (req, res) => {
  try {
    const id_account = req.user._id;
    //
    const myPost = await socialPost
      .find({ id_account })
      .populate("id_account")
      .sort({ createdAt: -1 })
      .lean();
    //
    // console.log(myPost)
    const friendPost = await socialPost
      .find({ id_account: { $ne: id_account } })
      .populate("id_account")
      .sort({ createdAt: -1 })
      .lean();
    const data = [...myPost, ...friendPost];
    return res.status(StatusCodes.OK).json({
      error: false,
      data
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};

export const list_my_post = async (req, res) => {
  try {
    const id_account = req.user._id;
    //
    const data = await socialPost
      .find({ id_account })
      .populate("id_account")
      .sort({ createdAt: -1 })
      .lean();
    //
    return res.status(StatusCodes.OK).json({
      error: false,
      data
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};