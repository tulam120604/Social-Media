import account from "../../model/auth/account.js";
import friendList from "../../model/auth/friendList.js";
import friendRequest from "../../model/auth/friendRequest.js";
import { StatusCodes } from "http-status-codes";

export const view_profile = async (req, res) => {
  try {
    const result = req.user;
    const data = {
      _id: result._id,
      userName: result.userName,
      email: result.email,
      picture: result.picture,
      role: result.role,
    };
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

// view user by id
export const view_user_by_id = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "không có id!",
      });
    }
    const data = await account.findOne({ _id: id });
    if (!data) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "không tìm thấy tài khoản!",
      });
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

// view all account
export const view_all_account = async (req, res) => {
  try {
    // console.log(req.user);
    // lọc lấy user loại trừ chính mình
    const data = await account.find(
      { _id: { $ne: req.user._id } },
      { password: 0 }
    );
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

// view list friend
export const view_friendList = async (req, res) => {
  try {
    const userId = req.user._id;
    const data = await friendList.find({ userId }).populate("friendId");
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

// view list friend
export const countFriend = async (req, res) => {
  try {
    const userId = req.user._id;
    const data = await friendList.countDocuments({ userId });
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

// view list  friend request
export const view_friendRequest = async (req, res) => {
  try {
    const receiverId = req.user._id;
    const data = await friendRequest.find({ receiverId }).populate("senderId");
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

// view friend suggets
export const view_friend_suggest = async (req, res) => {
  try {
    // lọc lấy user loại trừ chính mình
    const data_account = await account
      .find({ _id: { $ne: req.user._id } }, { password: 0 })
      .limit(100);
    // distinct trả về 1 mảng chỉ chứa field dữ liệu đó, thay vì dùng $ne
    const data_friend = await friendList.distinct("friendId", {
      userId: req.user._id,
    });
    const friendReq = await friendRequest.find({
      senderId: req.user._id,
      status: "pending",
    });
    // lấy arr chứa id của danh sách gửi kết bạn
    const pendingReceiverIds = friendReq.map((f) => f.receiverId.toString());
    const friendIds = data_friend.map((id) => id.toString());
    // lọc trừ bạn bè và đã gửi lời mời
    const data = data_account
      .filter((item) => {
        const id = item._id.toString();
        return (
          !friendIds.includes(id) &&
          !pendingReceiverIds.includes(id)
        )
      })
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
