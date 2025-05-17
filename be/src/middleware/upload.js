import multer from "multer";
import path from "path";
import cloudinary from "../utils/cloudinary.js";
import fs from "fs";

// config multer
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, String(Math.random() * 1000) + path.extname(file.originalname));
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

// upload file

export const uploadFile = async (img) => {
  try {
    if (Array.isArray(img)) {
      const image_upload = img.map((file) =>
        cloudinary.uploader.upload(file.path, {
          folder: "Social_media",
        })
      );
      const result = await Promise.all(image_upload);
      img.forEach(async (file) => await fs.promises.unlink(file.path));
      return result;
    } else {
      const result = await cloudinary.uploader.upload(img.path);
      await fs.promises.unlink(img.path);
      return result;
    }
  } catch (error) {
    return error;
  }
};
