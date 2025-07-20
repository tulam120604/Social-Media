import socialPost from "../../model/socialPost/socialPost.js";
import like from "../../model/socialPost/like.js";
import { StatusCodes } from "http-status-codes";

// kiểm tra và trả về trạng thái đã like cho bài viết
async function has_user_like_post(data, id_account) {
  const idPost = [];
  for (const id of data) {
    if (id?._id) idPost.push(id._id);
  }
  const likePost = await like
    .find({
      id_account,
      id_post: {
        $in: idPost,
      },
    })
    .lean();
  const likePostId = new Set(likePost.map((like) => like.id_post.toString()));
  // nếu đã like rồi thì gắn thêm 1 field nữa để hiện UI
  for (const post of data) {
    post.statusLike = likePostId.has(post._id.toString());
  }
}

export const list_post = async (req, res) => {
  try {
    const id_account = req.user._id;
    //
    let myPost = await socialPost
      .find({ id_account })
      .populate("id_account")
      .sort({ createdAt: -1 })
      .lean();
    //
    // console.log(myPost)
    myPost = myPost.map((post) => ({
      ...post,
      isOwner: true,
    }));
    const friendPost = await socialPost
      .find({ id_account: { $ne: id_account } })
      .populate("id_account")
      .sort({ createdAt: -1 })
      .lean();
    const data = [...myPost, ...friendPost];
    if (id_account) {
      await has_user_like_post(data, id_account);
    }
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

export const list_my_post = async (req, res) => {
  try {
    const id_account = req.user._id;
    //
    if (!id_account) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "Không có id tài khoản!",
      });
    }
    const dataPost = await socialPost
      .find({ id_account })
      .populate("id_account")
      .sort({ createdAt: -1 })
      .lean();
    //
    await has_user_like_post(dataPost, id_account);
    const data = dataPost.map((post) => ({
      ...post,
      isOwner: true
    }))
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
