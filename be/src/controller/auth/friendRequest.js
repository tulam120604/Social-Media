import friendRequest from "../../model/auth/friendRequest.js";
import friendList from "../../model/auth/friendList.js";
import { StatusCodes } from "http-status-codes";

export const handleFriendRequets = async (req, res) => {
  try {
    const { status, senderId } = req.body;
    const receiverId = req.user._id;
    if (!senderId || !receiverId) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "Không có thông tin!",
      });
    }
    const result = await friendRequest.findOne({ senderId, receiverId });
    if (result) {
      if (status === "accepted") {
        await friendList.create({
          userId: receiverId,
          friendId: senderId,
        });
        await friendList.create({
          userId: senderId,
          friendId: receiverId,
        });
        await friendRequest.findOneAndDelete({ senderId, receiverId });
        return res.status(StatusCodes.CREATED).json({
          error: false,
          message: "Đã chấp nhận lời mời kết bạn!",
        });
      } else {
        await friendRequest.findOneAndDelete({ senderId, receiverId });
        return res.status(StatusCodes.CREATED).json({
          error: false,
          message: "Đã từ chối lời mời kết bạn!",
        });
      }
    }
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};

export const addFriend = async (req, res) => {
  try {
    const { status, receiverId } = req.body;
    const senderId = req.user._id;
    if (!senderId) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "Không có thông tin!",
      });
    }
    await friendRequest.create({ senderId, receiverId, status });
    return res.status(StatusCodes.CREATED).json({
      error: false,
      message: "Đã gửi lời mời kết bạn!",
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};

export const removeFriend = async (req, res) => {
  try {
    const { receiverId } = req.body;
    const senderId = req.user._id;
    if (!senderId|| !receiverId) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "Thiếu thông tin để hủy kết bạn!",
      });
    }
    await friendList.findOneAndDelete({
      userId: senderId,
      friendId: receiverId,
    });
    await friendList.findOneAndDelete({
      friendId: senderId,
      userId: receiverId,
    });
    return res.status(StatusCodes.CREATED).json({
      error: false,
      message: "Đã hủy kết bạn!",
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};

// senderId
// receiverId
