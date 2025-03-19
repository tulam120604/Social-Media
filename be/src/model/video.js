import mongoose from "mongoose";

const schema_video = new mongoose.Schema(
  {
    id_account: {
      type: mongoose.Types.ObjectId,
      ref: "Account",
    },
    id_catalog: {
      type: mongoose.Types.ObjectId,
      ref: "Catalog_video",
    },
    uri_video: {
      type: String,
      required: true,
    },
    uri_thumbnail: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes : {
        type : Number,
        default : 0
    },
    dislikes : {
        type : Number,
        default : 0
    },
    nameVideo: {
      type: String,
      maxlength: 2000,
    },
    hastagVideo: {
      type: String,
      maxlength: 1000,
    },
    descriptionVideo: String,
  },
  { timestamps: true, versionKey: false }
);
