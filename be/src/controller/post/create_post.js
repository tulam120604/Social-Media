import { uploadFile } from "../../middleware/upload.js";
import socialPost from "../../model/socialPost/socialPost.js";
import { StatusCodes } from "http-status-codes";

export const create_socialPost = async (req, res) => {
  try {
    const id_account = req.user.id;
    if (!id_account) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "Không có id tài khoản!",
      });
    }
    let value = {
      id_account,
      ...req.body,
    };
    const img = req.files;

    if (img) {
      const img_upload = await uploadFile(img);
      const secure_url = img_upload.map((url_secure) => url_secure.secure_url);
      value = {
        ...value,
        media_urls: secure_url,
      };
    }
    await socialPost.create(value);
    return res.status(StatusCodes.CREATED).json({
      error: false,
      message: "Tạo bài viết thành công!",
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};
