import post from "../../model/post.js";

export const create_post = (req, res) => {
  try {
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};
