import { uploadFile } from "../../middleware/upload.js";
import socialPost from "../../model/socialPost/socialPost.js";
import { StatusCodes } from "http-status-codes";

// edit single field
export const edit_single_field = async (req, res) => {
  try {
    const id_account = req.user._id;
    if (!id_account) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "Không có id tài khoản!",
      });
    }
    let value = req.body;
    const img = req.files;

    if (img) {
      const img_upload = await uploadFile(img);
      if (
        !img_upload ||
        !Array.isArray(img_upload) ||
        img_upload.length === 0
      ) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          error: true,
          message: "Tải ảnh thất bại!",
        });
      }
      const secure_url = img_upload.map((url_secure) => url_secure.secure_url);
      value = {
        media_urls: secure_url,
      };
    }
    const result = await socialPost.findByIdAndUpdate(req.params.id, value, {
      new: true,
    });
    if (!result || !result._id) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: true,
        message: "Đã có lỗi xảy ra, vui lòng thử lại!",
      });
    }
    return res.status(StatusCodes.CREATED).json({
      error: false,
      message: "Đã cập nhật bài viết!",
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};

// edit multipleField
export const edit_multiple_field = async (req, res) => {
  try {
    const id_account = req.user._id;
    if (!id_account) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "Không có id tài khoản!",
      });
    }
    let value = {
      ...req.body,
    };
    const img = req.files;

    if (img) {
      const img_upload = await uploadFile(img);
      if (
        !img_upload ||
        !Array.isArray(img_upload) ||
        img_upload.length === 0
      ) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          error: true,
          message: "Tải ảnh thất bại!",
        });
      }
      const secure_url = img_upload.map((url_secure) => url_secure.secure_url);
      value = {
        ...value,
        media_urls: secure_url,
      };
    }
    const result = await socialPost.findByIdAndUpdate(req.params.id, value, {
      new: true,
    });
    if (!result || !result._id) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: true,
        message: "Đã có lỗi xảy ra, vui lòng thử lại!",
      });
    }
    return res.status(StatusCodes.CREATED).json({
      error: false,
      message: "Đã cập nhật bài viết!",
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};
