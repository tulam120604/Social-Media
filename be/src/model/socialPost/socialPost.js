import mongoose from "mongoose";

const schema_socialPost = new mongoose.Schema({
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
  interact: {
    type: mongoose.Types.ObjectId,
    ref: "interact",
  },
  comment: {
    type: mongoose.Types.ObjectId,
    ref: "comment",
  },
});

export default mongoose.model("socialPost", schema_socialPost);