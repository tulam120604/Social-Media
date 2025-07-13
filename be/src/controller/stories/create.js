import { uploadFile } from "../../middleware/upload.js";
import story from "../../model/stories/story.js";
import { StatusCodes } from "http-status-codes";

export const create_story = async (req, res) => {
  try {
    const id_account = req.user._id;
    if (!id_account) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: true,
        message: "Không có tài khoản!",
      });
    }

    let value = {
      id_account,
      ...req.body,
    };


    const img = req.files;
    console.log(req)
    if (img) {
      const img_upload = await uploadFile(img);
      if (
        !img_upload) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          error: true,
          message: "Tải ảnh thất bại!",
        });
      }
      const secure_url = img_upload.secure_url ? img_upload.secure_url : img_upload.url;
      value = {
        ...value,
        media: secure_url,
      };
      const result = await story.create(value);
      if (!result || !result._id) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          error: true,
          message: "Đã có lỗi xảy ra, vui lòng thử lại!",
        });
      }
      return res.status(StatusCodes.CREATED).json({
        error: false,
        message: "Tạo tin thành công!",
      });
    }
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: true,
      message: "Tạo tin thất bại!",
    });

  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: true,
      message: error || 500,
    });
  }
};
