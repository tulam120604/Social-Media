import friendRequest from "../../model/auth/friendRequest";
import { StatusCodes } from "http-status-codes";

export const handleFriendRequets = async (req, res) => {
  try {
    const { status } = req.body;
    const userId = req.user.id;
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};
