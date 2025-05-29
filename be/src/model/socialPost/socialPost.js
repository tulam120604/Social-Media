import mongoose from "mongoose";

const schema_socialPost = new mongoose.Schema(
  {
    id_account: {
      type: mongoose.Types.ObjectId,
      ref: "account",
    },
    content: String,
    media_urls: [String],
    status: {
      type: String,
      enum: ["public", "private", "friends"],
      default: "public",
    },
    interact_count: {
      type: Number,
      default: 0,
    },
    comment_count: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("socialPost", schema_socialPost);
